import Link from "next/link";
import Image from "next/image";
import SceneArt from "./SceneArt";
import { formatAcres, formatPrice, type Listing } from "@/data/listings";

export default function ListingCard({
  listing,
  large = false,
}: {
  listing: Listing;
  large?: boolean;
}) {
  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group block overflow-hidden bg-cream shadow-[0_2px_20px_rgba(36,27,18,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(36,27,18,0.18)]"
    >
      <div className={`relative overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          {listing.photos?.[0] ? (
            <Image
              src={listing.photos[0]}
              alt={listing.name}
              fill
              className="object-cover"
              sizes={large ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            />
          ) : (
            <SceneArt scene={listing.scene} />
          )}
        </div>

        {/* status ribbon */}
        <span
          className={`eyebrow absolute top-4 left-4 px-3 py-1.5 !text-[0.6rem] ${
            listing.status === "Available"
              ? "bg-cream/90 text-ink"
              : listing.status === "Under Contract"
                ? "bg-saddle/95 text-cream"
                : "bg-ink/90 text-cream"
          }`}
        >
          {listing.status}
        </span>

        {listing.video && (
          <span className="eyebrow absolute top-4 right-4 flex items-center gap-2 bg-ink/70 px-3 py-1.5 !text-[0.6rem] text-cream backdrop-blur-sm">
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-current">
              <path d="M2 1.5 L10.5 6 L2 10.5 Z" />
            </svg>
            Video
          </span>
        )}

        {/* hover veil + CTA */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="eyebrow m-5 flex items-center gap-2 text-cream">
            View Ranch
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="eyebrow !text-[0.58rem] text-saddle">
          {listing.county}, {listing.state}
        </p>
        <h3 className="mt-2 font-display text-xl leading-snug">{listing.name}</h3>
        <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
          <span className="text-sm text-ink/70">{formatAcres(listing.acres)}</span>
          <span className="font-display text-lg text-saddle">
            {formatPrice(listing.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
