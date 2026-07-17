/**
 * Ranch Land Group — property listings.
 *
 * The first entry is REAL inventory. The rest are SAMPLE South Texas
 * listings so the site is fully browsable — replace them with real
 * inventory as it signs. Films: set `video` to a YouTube/Vimeo URL
 * (recommended) or drop an mp4 at /public/media/listings/<slug>.mp4.
 * Photos: put files under /public/media/listings/ and list them in
 * `photos` — the first one is the card thumbnail and page hero.
 */

export type SceneKey =
  | "mesa"
  | "river"
  | "highdesert"
  | "hillcountry"
  | "prairie"
  | "canyon";

export type ListingStatus = "Available" | "Under Contract" | "Sold";

export interface Listing {
  slug: string;
  name: string;
  county: string;
  state: string;
  region: string;
  price: number;
  acres: number;
  type: "Hunting" | "Cattle" | "Recreational" | "Luxury" | "Farm & Ranch";
  status: ListingStatus;
  featured: boolean;
  scene: SceneKey;
  video?: string;
  photos?: string[];
  headline: string;
  description: string[];
  highlights: string[];
  water: string;
  wildlife: string;
  improvements: string;
  /** Listing agent shown on this property's page (defaults to site contact). */
  agent?: { name: string; phone: string; phoneHref: string };
}

export const listings: Listing[] = [
  // ── REAL LISTING — Zapata TX Ranch (land.com ID 28031740) ──
  {
    slug: "zapata-tx-ranch",
    name: "Zapata TX Ranch",
    county: "Zapata County",
    state: "Texas",
    region: "Golden Triangle",
    price: 1435700,
    acres: 586,
    type: "Hunting",
    status: "Available",
    featured: true,
    scene: "highdesert",
    video: "https://youtu.be/r3hiB32SW8E",
    photos: [
      // hero/thumbnail first — clean entrance aerial, no baked-in text
      "/media/listings/zapata/zapata-06.jpg",
      "/media/listings/zapata/zapata-02.jpg",
      "/media/listings/zapata/zapata-03.jpg",
      "/media/listings/zapata/zapata-04.jpg",
      "/media/listings/zapata/zapata-05.jpg",
      "/media/listings/zapata/zapata-01.jpg",
      "/media/listings/zapata/zapata-07.jpg",
      "/media/listings/zapata/zapata-08.jpg",
    ],
    headline:
      "586± low-fence acres in the heart of the South Texas Golden Triangle — turnkey whitetail country 30 minutes from Laredo.",
    description: [
      "Zapata TX Ranch sits in the legendary Golden Triangle of South Texas, a region recognized worldwide for producing some of the finest trophy whitetail anywhere. Surrounded by expansive low-fence neighbors, the ranch enjoys exceptional wildlife movement across flat to gently rolling country blanketed in dense native brush.",
      "The property hunts right now: two hunting blinds, multiple deer feeders, and several quail feeders have been maintained and supplied year-round, carrying strong populations of whitetail, bobwhite quail, dove, wild hogs, and javelina. Caliche ranch roads, senderos, and an established trail system put every corner of the ranch within easy reach, while the land itself remains largely undeveloped — a rare blank canvas for a hunting retreat, recreational ranch, cattle operation, or long-term hold.",
      "Buy the entire 586± acres or take the North Tract (282± acres) or South Tract (304± acres) individually. A Wildlife Management Tax Exemption is in place. Ten minutes from San Ygnacio, thirty from Falcon Lake and Laredo. Electricity runs approximately 400 feet from FM 3169; a water well will need to be drilled (quote available on request). This is a surface-estate-only sale — the seller retains all mineral rights, and two inactive gas well sites on the property, inspected monthly by the operating company, do not convey.",
    ],
    highlights: [
      "586± low-fence acres — whole, or as 282± / 304± acre tracts",
      "Heart of the Golden Triangle, surrounded by large low-fence ranches",
      "Trophy whitetail, bobwhite quail, dove, hogs & javelina",
      "2 blinds, deer & quail feeders — fed year-round",
      "Caliche roads, senderos & established trail system",
      "Wildlife Management Tax Exemption in place",
      "10 min to San Ygnacio · 30 min to Falcon Lake & Laredo",
    ],
    water:
      "Water well to be drilled (quote available); electricity ±400 ft from FM 3169",
    wildlife: "Trophy whitetail, bobwhite quail, dove, wild hogs, javelina",
    improvements:
      "Low-fenced perimeter, 2 hunting blinds, deer & quail feeders, caliche roads & senderos",
    agent: {
      name: "Orlando Pena",
      phone: "(956) 594-7471",
      phoneHref: "tel:+19565947471",
    },
  },

  // ── Sample listings below — replace with real inventory ──
  {
    slug: "cenizo-creek-ranch",
    name: "Cenizo Creek Ranch",
    county: "La Salle County",
    state: "Texas",
    region: "Golden Triangle",
    price: 4850000,
    acres: 1900,
    type: "Hunting",
    status: "Available",
    featured: true,
    scene: "prairie",
    headline:
      "1,900± acres of prime La Salle County brush with a decade of protein and proven 170+ class genetics.",
    description: [
      "Cenizo Creek Ranch is the kind of country that made the Golden Triangle famous — deep native brush laced with senderos, a seasonal creek bottom through the middle, and neighbors managed just as seriously as this ranch has been.",
      "A decade of year-round protein and disciplined harvest has produced a documented history of 170+ class whitetail alongside strong bobwhite numbers, dove flights on the tanks, and hogs and javelina in the creek bottom.",
      "A comfortable owner's camp, equipment barn, and a full complement of blinds and feeders convey — hunt it the weekend after closing.",
    ],
    highlights: [
      "1,900± acres of managed Golden Triangle brush",
      "170+ class whitetail history, 10-year protein program",
      "Seasonal creek bottom & 6 stock tanks",
      "Owner's camp, equipment barn, working pens",
      "12 blinds & 14 feeders convey",
      "20 minutes to Cotulla, I-35 access",
    ],
    water: "Seasonal creek, 3 water wells, 6 stock tanks, piped water to plots",
    wildlife: "Trophy whitetail, bobwhite quail, dove, hogs, javelina",
    improvements: "Owner's camp, equipment barn, pens, blinds & feeders convey",
  },
  {
    slug: "encino-vista-ranch",
    name: "Encino Vista Ranch",
    county: "Duval County",
    state: "Texas",
    region: "Brush Country",
    price: 7900000,
    acres: 2400,
    type: "Luxury",
    status: "Available",
    featured: true,
    scene: "river",
    headline:
      "A 2,400± acre turnkey South Texas showpiece — 6,500 sq ft lodge, stocked lakes, and helicopter-surveyed genetics.",
    description: [
      "Encino Vista is the full South Texas package: a 6,500 square foot hacienda-style lodge under century-old encinos, overlooking a stocked bass lake with the brush country running to the horizon behind it.",
      "The ranch has been managed at the highest level — helicopter surveys, MLDP harvest, year-round protein — and it shows in the deer. Two additional lakes hold bass and provide duck hunting in the winter months.",
      "With staff housing, a five-bay equipment barn, walk-in cooler, and a private airstrip, the operation runs turnkey for family retreats or corporate entertainment alike.",
    ],
    highlights: [
      "2,400± acres, high-fenced and intensively managed",
      "6,500 sq ft hacienda lodge, sleeps 16",
      "3 stocked lakes — trophy bass & winter ducks",
      "MLDP program, helicopter-surveyed herd",
      "Staff housing, 5-bay barn, walk-in cooler",
      "Private caliche airstrip, 1 hour to Corpus Christi",
    ],
    water: "3 stocked lakes, 4 wells, pipeline to troughs & plots",
    wildlife: "Trophy whitetail, bass, ducks, quail, dove, hogs",
    improvements:
      "Hacienda lodge, staff housing, 5-bay barn, cooler, airstrip, pens",
  },
  {
    slug: "palo-blanco-ranch",
    name: "Palo Blanco Ranch",
    county: "Jim Hogg County",
    state: "Texas",
    region: "Brush Country",
    price: 2350000,
    acres: 940,
    type: "Recreational",
    status: "Available",
    featured: false,
    scene: "canyon",
    headline:
      "940± unspoiled acres of Jim Hogg County brush — a blank canvas priced to move at $2,500 an acre.",
    description: [
      "Palo Blanco is raw, honest brush country in one of South Texas' quietest hunting counties — thick cenizo and blackbrush flats, white caliche hills, and complete seclusion at the end of a private easement.",
      "The ranch has never been commercially hunted, and it sits in a neighborhood of large ownerships that let wildlife move the way it should. Whitetail, quail, dove, hogs, and javelina work the country undisturbed.",
      "Electricity on the boundary and an existing well make the improvements easy — bring a camp house, or just a gooseneck and a feeder, and it hunts this fall.",
    ],
    highlights: [
      "940± acres in a big-ranch neighborhood",
      "Never commercially hunted",
      "Existing water well, electric at the boundary",
      "Cenizo & blackbrush cover, caliche hills",
      "Locked-gate privacy via deeded easement",
      "45 minutes to Hebbronville & Falfurrias",
    ],
    water: "1 water well, 2 dirt tanks",
    wildlife: "Whitetail, bobwhite quail, dove, hogs, javelina",
    improvements: "Perimeter fence, well, all-weather caliche entry road",
  },
  {
    slug: "santa-cruz-cattle-co",
    name: "Santa Cruz Cattle Co.",
    county: "Starr County",
    state: "Texas",
    region: "Rio Grande Plains",
    price: 9200000,
    acres: 4800,
    type: "Cattle",
    status: "Available",
    featured: false,
    scene: "hillcountry",
    headline:
      "A 4,800± acre working cow-calf and hunting combination running 300 pairs on strong native grass.",
    description: [
      "Santa Cruz is a real South Texas outfit — 4,800± deeded acres of strong native grass and brush mosaic, watered by wells and pipeline, cross-fenced into eight pastures and running 300 pairs year-round.",
      "The improvements are honest and complete: a remodeled headquarters home, hands' housing, covered working pens with scales, and a preconditioning trap off the highway frontage.",
      "The back country is pure Golden Triangle hunting ground — big whitetail in the brush lines, quail on the grass flats, and dove over every tank. Two incomes, one ranch.",
    ],
    highlights: [
      "4,800± deeded acres, 300 AU rated",
      "8 pastures, well + pipeline water throughout",
      "HQ home, hands' housing, covered pens & scales",
      "Serious whitetail & quail hunting out the back",
      "Paved frontage plus locked-gate back entry",
      "3-generation single-family ownership",
    ],
    water: "5 wells, 8 miles of pipeline, 14 drinkers, 6 dirt tanks",
    wildlife: "Whitetail, bobwhite quail, dove, hogs, javelina",
    improvements:
      "HQ home, hands' housing, covered pens, scales, preconditioning trap",
  },
  {
    slug: "arroyo-alamo-ranch",
    name: "Arroyo Alamo Ranch",
    county: "Dimmit County",
    state: "Texas",
    region: "Golden Triangle",
    price: 5600000,
    acres: 1750,
    type: "Hunting",
    status: "Under Contract",
    featured: false,
    scene: "mesa",
    headline:
      "1,750± high-fenced Dimmit County acres with a designer lodge and a documented 180+ class program.",
    description: [
      "Arroyo Alamo pairs Dimmit County's famous genetics with a headquarters that belongs in a design annual — a 4,800 square foot limestone-and-steel lodge framing sunset views over the deepest brush on the ranch.",
      "High-fenced and managed for over a decade, the herd carries documented 180+ class production, supported by a protein program, food plots along the arroyo, and water piped to every corner.",
      "Under contract — but we have qualified back-up interest, and buyers who missed it should see Cenizo Creek and Zapata TX Ranch.",
    ],
    highlights: [
      "1,750± acres under 8' high fence",
      "180+ class whitetail, documented 10-year program",
      "4,800 sq ft designer lodge, sleeps 12",
      "Food plot system along Arroyo Alamo",
      "14 blinds, protein feeders & equipment convey",
      "40 minutes to Carrizo Springs",
    ],
    water: "4 wells, piped water throughout, 5 ponds",
    wildlife: "Trophy whitetail, quail, dove, hogs, javelina",
    improvements: "Designer lodge, barn, cooler, blinds & feeders convey",
  },
  {
    slug: "dos-arroyos-ranch",
    name: "Dos Arroyos Ranch",
    county: "Webb County",
    state: "Texas",
    region: "Golden Triangle",
    price: 3975000,
    acres: 1250,
    type: "Hunting",
    status: "Available",
    featured: false,
    scene: "highdesert",
    headline:
      "1,250± high-fenced Webb County acres with proven 170+ class whitetail genetics and a turnkey lodge.",
    description: [
      "Dos Arroyos sits in the golden triangle of South Texas whitetail country, high-fenced and intensively managed for over a decade with a documented history of 170+ class deer.",
      "Two brushy arroyos cross the ranch, feeding food plots and strategically placed water. The 3,000 square foot lodge sleeps twelve and sells fully furnished — arrive in September, hunt in October.",
      "Protein program, blinds, feeders, and equipment convey. This is the definition of turnkey.",
    ],
    highlights: [
      "1,250± acres under 8' high fence",
      "170+ class whitetail genetics, 10-yr program",
      "3,000 sq ft furnished lodge, sleeps 12",
      "12 blinds, 14 feeders, protein program",
      "2 arroyos, 6 ponds, food plot system",
      "45 minutes to Laredo International",
    ],
    water: "6 ponds, 3 wells, piped water to plots",
    wildlife: "Trophy whitetail, quail, dove, javelina, hogs",
    improvements: "Lodge, walk-in cooler, barn, blinds & feeders convey",
  },
];

export const formatPrice = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export const formatAcres = (n: number) =>
  `${n.toLocaleString("en-US")}± acres`;

export const featuredListings = listings.filter((l) => l.featured);

export const getListing = (slug: string) =>
  listings.find((l) => l.slug === slug);

export const listingCounties = [
  ...new Set(listings.map((l) => l.county)),
].sort();
