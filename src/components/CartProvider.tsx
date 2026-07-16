"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, formatUsd } from "@/data/products";
import { site } from "@/data/site";

export interface CartLine {
  productId: string;
  size: string;
  color: string;
  qty: number;
}

interface CartContextValue {
  lines: CartLine[];
  count: number;
  total: number;
  add: (line: Omit<CartLine, "qty">) => void;
  remove: (index: number) => void;
  setQty: (index: number, qty: number) => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

const STORAGE_KEY = "rlg-cart-v1";

export default function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One-time hydration from localStorage (an external store), so the
    // server-rendered empty cart and the persisted client cart converge.
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* corrupted storage — start fresh */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const add = useCallback((line: Omit<CartLine, "qty">) => {
    setLines((prev) => {
      const i = prev.findIndex(
        (l) =>
          l.productId === line.productId &&
          l.size === line.size &&
          l.color === line.color,
      );
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + 1 };
        return next;
      }
      return [...prev, { ...line, qty: 1 }];
    });
    setDrawerOpen(true);
  }, []);

  const remove = useCallback(
    (index: number) => setLines((prev) => prev.filter((_, i) => i !== index)),
    [],
  );

  const setQty = useCallback(
    (index: number, qty: number) =>
      setLines((prev) =>
        qty <= 0
          ? prev.filter((_, i) => i !== index)
          : prev.map((l, i) => (i === index ? { ...l, qty } : l)),
      ),
    [],
  );

  const { count, total } = useMemo(() => {
    let count = 0;
    let total = 0;
    for (const l of lines) {
      const p = products.find((p) => p.id === l.productId);
      if (!p) continue;
      count += l.qty;
      total += p.price * l.qty;
    }
    return { count, total };
  }, [lines]);

  const value = useMemo(
    () => ({ lines, count, total, add, remove, setQty, drawerOpen, setDrawerOpen }),
    [lines, count, total, add, remove, setQty, drawerOpen],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

function CartDrawer() {
  const { lines, total, remove, setQty, drawerOpen, setDrawerOpen } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  // Stripe checkout is offered once every cart item has a price ID.
  const stripeReady =
    lines.length > 0 &&
    lines.every(
      (l) => products.find((p) => p.id === l.productId)?.stripePriceId,
    );

  const stripeCheckout = async () => {
    setCheckingOut(true);
    setCheckoutError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed.");
      }
      window.location.href = data.url;
    } catch (err) {
      setCheckoutError(
        err instanceof Error ? err.message : "Checkout failed. Try again.",
      );
      setCheckingOut(false);
    }
  };

  const orderEmail = () => {
    const body = lines
      .map((l) => {
        const p = products.find((p) => p.id === l.productId);
        return p
          ? `• ${p.name} — ${l.color}, ${l.size} × ${l.qty} (${formatUsd(p.price * l.qty)})`
          : "";
      })
      .filter(Boolean)
      .join("\n");
    const subject = encodeURIComponent("Ranch Land Group — Outfitter Order");
    const full = encodeURIComponent(
      `Howdy,\n\nI'd like to place the following order:\n\n${body}\n\nTotal: ${formatUsd(total)}\n\nShip to:\nName:\nAddress:\nPhone:\n`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${full}`;
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-ink/50 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream text-ink shadow-2xl transition-transform duration-500 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-display text-lg tracking-[0.18em]">Your Gear</h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className="eyebrow cursor-pointer opacity-70 hover:opacity-100"
          >
            Close ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <p className="py-16 text-center text-ink/60 italic">
              Your cart is empty — the Outfitter awaits.
            </p>
          ) : (
            <ul className="divide-y divide-ink/10">
              {lines.map((l, i) => {
                const p = products.find((p) => p.id === l.productId);
                if (!p) return null;
                return (
                  <li key={`${l.productId}-${l.size}-${l.color}`} className="flex items-start justify-between gap-4 py-4">
                    <div>
                      <p className="font-display text-sm tracking-wider">{p.name}</p>
                      <p className="mt-1 text-sm text-ink/60">
                        {l.color} · {l.size}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <button
                          onClick={() => setQty(i, l.qty - 1)}
                          className="h-6 w-6 cursor-pointer rounded-full border border-ink/25 leading-none hover:bg-ink hover:text-cream"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-sm">{l.qty}</span>
                        <button
                          onClick={() => setQty(i, l.qty + 1)}
                          className="h-6 w-6 cursor-pointer rounded-full border border-ink/25 leading-none hover:bg-ink hover:text-cream"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <button
                          onClick={() => remove(i)}
                          className="ml-2 cursor-pointer text-xs text-saddle underline underline-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className="font-display text-sm">{formatUsd(p.price * l.qty)}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="eyebrow">Total</span>
              <span className="font-display text-xl">{formatUsd(total)}</span>
            </div>
            {stripeReady ? (
              <>
                <button
                  onClick={stripeCheckout}
                  disabled={checkingOut}
                  className="block w-full cursor-pointer bg-saddle px-6 py-4 text-center font-display text-sm tracking-[0.25em] text-cream uppercase transition-colors hover:bg-bark disabled:cursor-wait disabled:opacity-60"
                >
                  {checkingOut ? "Opening Secure Checkout…" : "Secure Checkout"}
                </button>
                {checkoutError && (
                  <p className="mt-3 text-center text-xs text-saddle">
                    {checkoutError}{" "}
                    <button
                      onClick={orderEmail}
                      className="cursor-pointer underline underline-offset-2"
                    >
                      Order by email instead
                    </button>
                  </p>
                )}
                <p className="mt-3 text-center text-xs text-ink/50">
                  Payments are processed securely by Stripe.
                </p>
              </>
            ) : (
              <>
                <button
                  onClick={orderEmail}
                  className="block w-full cursor-pointer bg-saddle px-6 py-4 text-center font-display text-sm tracking-[0.25em] text-cream uppercase transition-colors hover:bg-bark"
                >
                  Place Order by Email
                </button>
                <p className="mt-3 text-center text-xs text-ink/50">
                  Secure online checkout is coming soon — orders are currently
                  taken by email.
                </p>
              </>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
