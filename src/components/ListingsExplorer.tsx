"use client";

import { useMemo, useState } from "react";
import ListingCard from "./ListingCard";
import { listings, listingCounties } from "@/data/listings";

const types = ["All", "Hunting", "Cattle", "Recreational", "Luxury"] as const;
const counties = ["All Counties", ...listingCounties];
const sorts = [
  ["price-desc", "Price · High to Low"],
  ["price-asc", "Price · Low to High"],
  ["acres-desc", "Acreage · Largest"],
  ["acres-asc", "Acreage · Smallest"],
] as const;

/** Live-filtering ranch browser for the listings index. */
export default function ListingsExplorer() {
  const [type, setType] = useState<(typeof types)[number]>("All");
  const [county, setCounty] = useState("All Counties");
  const [sort, setSort] = useState<(typeof sorts)[number][0]>("price-desc");

  const results = useMemo(() => {
    let out = listings.filter(
      (l) =>
        (type === "All" || l.type === type) &&
        (county === "All Counties" || l.county === county),
    );
    out = [...out].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "acres-desc":
          return b.acres - a.acres;
        case "acres-asc":
          return a.acres - b.acres;
        default:
          return b.price - a.price;
      }
    });
    return out;
  }, [type, county, sort]);

  return (
    <div>
      {/* filter bar */}
      <div className="mb-10 flex flex-col gap-6 border-y border-ink/10 py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by property type">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`eyebrow cursor-pointer px-4 py-2.5 transition-colors ${
                type === t
                  ? "bg-ink text-cream"
                  : "bg-transparent text-ink/60 hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <select
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            className="eyebrow cursor-pointer border border-ink/20 bg-transparent px-4 py-2.5"
            aria-label="Filter by county"
          >
            {counties.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof sorts)[number][0])}
            className="eyebrow cursor-pointer border border-ink/20 bg-transparent px-4 py-2.5"
            aria-label="Sort listings"
          >
            {sorts.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="eyebrow mb-8 text-ink/50">
        {results.length} {results.length === 1 ? "Ranch" : "Ranches"}
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {results.map((l) => (
          <ListingCard key={l.slug} listing={l} />
        ))}
      </div>

      {results.length === 0 && (
        <p className="py-24 text-center text-ink/60 italic">
          No ranches match those filters yet — new inventory lands often.
          Tell us what you&apos;re hunting for and we&apos;ll find it off-market.
        </p>
      )}
    </div>
  );
}
