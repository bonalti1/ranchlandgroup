"use client";

import { useEffect } from "react";

/** Empties the persisted cart after a successful checkout. */
export default function ClearCart() {
  useEffect(() => {
    try {
      localStorage.removeItem("rlg-cart-v1");
    } catch {
      /* storage unavailable — nothing to clear */
    }
  }, []);
  return null;
}
