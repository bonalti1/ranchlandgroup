/**
 * Ranch Land Group — global site configuration.
 * Edit this file to update contact details, social links,
 * and the hero video in one place.
 */
export const site = {
  name: "Ranch Land Group",
  tagline: "Legacy Land. Expertly Sold.",
  description:
    "Ranch Land Group is South Texas' ranch and land team — hunting " +
    "ranches, recreational land, and legacy properties from the Golden " +
    "Triangle to the Rio Grande.",
  phone: "(956) 586-6681",
  phoneHref: "tel:+19565866681",
  email: "office.ranchland@gmail.com",
  website: "ranchland-group.com",
  address: "McAllen, Texas",

  /**
   * Drop your cinematic brand film at /public/media/hero.mp4 (H.264,
   * 1080p+, ~20–40s loop, no audio needed) and it will automatically
   * play full-screen behind the homepage hero. Until then the site
   * renders the animated Ranch Land landscape.
   */
  heroVideo: "/media/hero.mp4",
  heroPoster: "/media/hero-poster.jpg",

  social: {
    instagram: "https://instagram.com/ranchlandgroup",
    facebook: "https://facebook.com/ranchlandgroup",
    youtube: "https://youtube.com/@ranchlandgroup",
  },
} as const;
