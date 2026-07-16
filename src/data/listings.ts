/**
 * Ranch Land Group — property listings.
 *
 * ⚠️  These are SAMPLE listings so the site is fully browsable today.
 * Replace them with real inventory: each entry is one ranch. To add a
 * property film, drop the file at /public/media/listings/<slug>.mp4
 * (or set `video` to a hosted URL) — the listing page will feature it.
 * To use real photography, drop images in /public/media/listings/ and
 * set `photos` to their paths; until then the site renders branded
 * landscape art driven by the `scene` field.
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
  // ── REAL LISTING — Benavides Ranch (land.com ID 28031740) ──
  {
    slug: "benavides-ranch",
    name: "Benavides Ranch",
    county: "Zapata County",
    state: "Texas",
    region: "South Texas",
    price: 1435700,
    acres: 586,
    type: "Hunting",
    status: "Available",
    featured: true,
    scene: "highdesert",
    video: "/media/listings/benavides-ranch.mp4",
    headline:
      "586± low-fence acres in the heart of the South Texas Golden Triangle — turnkey whitetail country 30 minutes from Laredo.",
    description: [
      "Benavides Ranch sits in the legendary Golden Triangle of South Texas, a region recognized worldwide for producing some of the finest trophy whitetail anywhere. Surrounded by expansive low-fence neighbors, the ranch enjoys exceptional wildlife movement across flat to gently rolling country blanketed in dense native brush.",
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
    slug: "sierra-blanca-creek-ranch",
    name: "Sierra Blanca Creek Ranch",
    county: "Hudspeth County",
    state: "Texas",
    region: "West Texas",
    price: 4850000,
    acres: 3200,
    type: "Hunting",
    status: "Available",
    featured: true,
    scene: "mesa",
    video: "/media/listings/sierra-blanca-creek-ranch.mp4",
    headline:
      "3,200± acres of big-sky West Texas country with a live seasonal creek and trophy mule deer genetics.",
    description: [
      "Sierra Blanca Creek Ranch is the kind of country that made West Texas famous — long golden grass flats breaking into rugged mesa rimrock, with a seasonal creek threading the length of the property and mountain views in every direction.",
      "Managed for wildlife for over a decade, the ranch carries exceptional mule deer genetics alongside blue quail, dove, and free-ranging aoudad in the high country. Miles of interior roads make every corner of the ranch accessible by truck or UTV.",
      "With paved frontage, staggering dark-sky views, and a turnkey headquarters, this is a legacy holding priced to move.",
    ],
    highlights: [
      "3,200± contiguous deeded acres",
      "1.5± miles of Sierra Blanca Creek",
      "Trophy mule deer & free-range aoudad",
      "3,800 sq ft owner's residence + bunkhouse",
      "Paved highway frontage, locked gate access",
      "45 minutes from El Paso International",
    ],
    water: "Seasonal creek, 3 water wells, 6 dirt tanks, pipeline to troughs",
    wildlife: "Mule deer, aoudad, blue quail, dove, javelina",
    improvements:
      "Owner's residence, bunkhouse, barn, shop, working pens, high-fenced trap",
  },
  {
    slug: "rio-hondo-river-ranch",
    name: "Rio Hondo River Ranch",
    county: "Lincoln County",
    state: "New Mexico",
    region: "Southern Rockies",
    price: 7900000,
    acres: 5400,
    type: "Luxury",
    status: "Available",
    featured: true,
    scene: "river",
    video: "/media/listings/rio-hondo-river-ranch.mp4",
    headline:
      "A 5,400± acre alpine-to-river showpiece with a mile of the Rio Hondo and a hand-hewn timber lodge.",
    description: [
      "From ponderosa timber at 8,200 feet down to a cottonwood-lined river bottom, Rio Hondo River Ranch captures the full range of Southern Rockies country in one deeded block.",
      "The centerpiece is a 6,500 square foot hand-hewn timber lodge overlooking a private stretch of the Rio Hondo, with guest cabins, a manager's home, and an equestrian barn completing the headquarters.",
      "Elk hunt the dark timber, rainbows hold in the river, and the whole operation runs turnkey — a true four-season mountain ranch.",
    ],
    highlights: [
      "5,400± deeded acres, alpine to river bottom",
      "1± mile of private Rio Hondo frontage",
      "6,500 sq ft timber lodge + 3 guest cabins",
      "Landowner elk tags, private trout water",
      "Equestrian barn and irrigated meadows",
      "20 minutes to Ruidoso, 2.5 hours to El Paso",
    ],
    water: "1± mile of Rio Hondo, senior water rights, 2 stocked ponds",
    wildlife: "Elk, mule deer, black bear, turkey, rainbow & brown trout",
    improvements:
      "Timber lodge, 3 cabins, manager's home, equestrian barn, shop",
  },
  {
    slug: "caprock-vista-ranch",
    name: "Caprock Vista Ranch",
    county: "Presidio County",
    state: "Texas",
    region: "Big Bend",
    price: 2350000,
    acres: 7100,
    type: "Recreational",
    status: "Available",
    featured: false,
    scene: "canyon",
    headline:
      "7,100± acres of dramatic Big Bend canyon country under the darkest skies in Texas.",
    description: [
      "Caprock Vista is raw, cinematic Big Bend country — sheer canyon walls, ocotillo flats, and sunset views that run a hundred miles into Mexico.",
      "Off-grid and unplugged, the ranch is a blank canvas for a desert compound, an astronomy retreat, or simply a family stronghold in the last true frontier of Texas.",
      "Priced at just over $330 an acre, it is one of the strongest value plays in the Big Bend corridor.",
    ],
    highlights: [
      "7,100± acres in one contiguous block",
      "2 miles of canyon rim with 100-mile views",
      "Class 1 dark skies — Milky Way visibility",
      "Free-range aoudad, mule deer, quail",
      "Solar-ready homesite bench with well",
      "1 hour to Marfa, 35 minutes to Presidio",
    ],
    water: "1 water well at homesite bench, 4 dirt tanks",
    wildlife: "Aoudad, mule deer, blue quail, javelina, mountain lion",
    improvements: "Camp cabin, storage container, all-weather caliche roads",
  },
  {
    slug: "llano-springs-ranch",
    name: "Llano Springs Ranch",
    county: "Mason County",
    state: "Texas",
    region: "Hill Country",
    price: 5600000,
    acres: 860,
    type: "Luxury",
    status: "Under Contract",
    featured: false,
    scene: "hillcountry",
    headline:
      "860± manicured Hill Country acres with crystal springs, granite outcrops, and a designer main house.",
    description: [
      "Llano Springs is the Hill Country ranch buyers describe and rarely find — live spring-fed water over pink granite, park-like oak flats, and a headquarters that belongs in a design annual.",
      "The 5,200 square foot main residence pairs limestone and steel with walls of glass framing the spring pool below. Whitetail, axis, and Rio Grande turkey work the oak mottes at first and last light.",
      "Thirty-five minutes from Fredericksburg wine country, it is equal parts working ranch and generational retreat.",
    ],
    highlights: [
      "860± acres of prime Mason County",
      "Spring-fed creek with granite pools",
      "5,200 sq ft architect-designed residence",
      "Whitetail, axis, blackbuck & turkey",
      "Irrigated coastal field, working pens",
      "35 minutes to Fredericksburg",
    ],
    water: "Live springs, spring-fed creek, 2 wells, irrigated field",
    wildlife: "Whitetail, axis, blackbuck, turkey, dove",
    improvements:
      "Main residence, guest house, party barn, equipment barn, pens",
  },
  {
    slug: "high-lonesome-cattle-co",
    name: "High Lonesome Cattle Co.",
    county: "Union County",
    state: "New Mexico",
    region: "High Plains",
    price: 9200000,
    acres: 14500,
    type: "Cattle",
    status: "Available",
    featured: false,
    scene: "prairie",
    headline:
      "A 14,500± acre turnkey cow-calf operation running 450 pairs on strong native shortgrass.",
    description: [
      "High Lonesome is a real outfit — 14,500± deeded acres of strong shortgrass country, watered by pipeline and windmill, fenced into twelve pastures and running 450 pairs year-round.",
      "Improvements are honest and complete: a remodeled headquarters home, hands' housing, scales, and a preconditioning lot with covered working facilities.",
      "Pronghorn and mule deer bring landowner tags, and the ranch has been in the same family for three generations — an increasingly rare offering at this scale.",
    ],
    highlights: [
      "14,500± deeded acres, 450 AU rated",
      "12 pastures, pipeline + windmill water",
      "Preconditioning lot, scales, covered chute",
      "Headquarters home + 2 hands' houses",
      "Landowner pronghorn & mule deer tags",
      "3-generation single-family ownership",
    ],
    water: "8 wells, 14 miles of pipeline, 22 drinkers, 5 dirt tanks",
    wildlife: "Pronghorn, mule deer, dove, occasional elk",
    improvements:
      "HQ home, 2 hands' houses, barns, scales, preconditioning lot, pens",
  },
  {
    slug: "dos-arroyos-ranch",
    name: "Dos Arroyos Ranch",
    county: "Webb County",
    state: "Texas",
    region: "South Texas",
    price: 3975000,
    acres: 1250,
    type: "Hunting",
    status: "Available",
    featured: false,
    scene: "highdesert",
    headline:
      "1,250± high-fenced South Texas acres with proven 170+ class whitetail genetics and a turnkey lodge.",
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
