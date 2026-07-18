/**
 * County landing pages — the core of the site's search strategy.
 * Each entry becomes /ranches-for-sale/<slug> targeting searches like
 * "ranches for sale in Zapata County". Keep the copy factual and
 * local — that's what earns rankings and trust.
 */

export interface CountyFaq {
  q: string;
  a: string;
}

export interface County {
  slug: string;
  name: string;
  seat: string;
  region: string;
  intro: string[];
  facts: [string, string][];
  faqs: CountyFaq[];
}

export const counties: County[] = [
  {
    slug: "zapata-county-texas",
    name: "Zapata County",
    seat: "Zapata",
    region: "Golden Triangle",
    intro: [
      "Zapata County sits on the Rio Grande in the heart of the South Texas Golden Triangle, with Falcon Lake — one of the country's premier trophy bass fisheries — anchoring its western edge. The county's brush country runs from the river terraces up into rolling caliche hills covered in blackbrush, cenizo, and mesquite.",
      "This is serious whitetail country. Surrounded by large, lightly hunted neighboring ranches, Zapata County properties benefit from exceptional wildlife movement, and the county has produced trophy-class deer for decades. Bobwhite quail, white-winged dove, javelina, and hogs round out the game list.",
      "Land here trades in honest, workable tracts — from a few hundred acres of raw brush to legacy holdings — with historic towns like San Ygnacio on the river and quick access to Laredo, 45 minutes north.",
    ],
    facts: [
      ["County seat", "Zapata"],
      ["Region", "Golden Triangle / Rio Grande"],
      ["Known for", "Trophy whitetail, Falcon Lake bass, low-fence brush country"],
      ["Wildlife", "Whitetail, bobwhite quail, white-winged dove, javelina, hogs"],
      ["Nearest city", "Laredo (±45 min)"],
    ],
    faqs: [
      {
        q: "Is Zapata County good for whitetail hunting?",
        a: "Yes — Zapata County sits in the Golden Triangle of South Texas, a region recognized worldwide for trophy whitetail genetics. Large neighboring low-fence ranches allow exceptional wildlife movement, and well-managed properties here consistently produce mature deer.",
      },
      {
        q: "What is a Wildlife Management Tax Exemption?",
        a: "Texas allows qualifying land to be appraised for property taxes based on wildlife management use instead of market value, which can lower the annual tax bill dramatically. Many Zapata County ranches, including listings we represent, already carry the exemption.",
      },
      {
        q: "Do Zapata County ranches convey mineral rights?",
        a: "Often they do not — much of South Texas has severed mineral estates from earlier oil and gas activity. Every listing is different, so we confirm the mineral and surface situation on each property before you offer.",
      },
    ],
  },
  {
    slug: "webb-county-texas",
    name: "Webb County",
    seat: "Laredo",
    region: "Golden Triangle",
    intro: [
      "Webb County is big-ranch country — one of the largest counties in Texas, stretching east and north from Laredo through some of the most storied whitetail ground in the state. Deep brush, big pastures, and a long tradition of serious game management define the land here.",
      "Proximity to Laredo International Airport makes Webb County a favorite for out-of-area owners: fly in, be on the ranch within the hour. High-fenced showplaces and honest low-fence country both trade here, along with combination cattle-and-hunting outfits.",
      "Whitetail is the headline, but Webb County also carries strong quail cycles, year-round hog hunting, and dove flights that fill the September sky.",
    ],
    facts: [
      ["County seat", "Laredo"],
      ["Region", "Golden Triangle"],
      ["Known for", "Large holdings, trophy whitetail, airport access"],
      ["Wildlife", "Whitetail, quail, dove, javelina, hogs"],
      ["Nearest city", "Laredo (in-county)"],
    ],
    faqs: [
      {
        q: "Why do hunters target Webb County ranches?",
        a: "Webb County combines proven trophy whitetail genetics with the scale serious managers want — large contiguous pastures, deep brush diversity, and a neighborhood of well-managed ranches. Add direct flights into Laredo, and it's one of the most practical trophy counties in Texas to own in.",
      },
      {
        q: "Are high-fenced ranches better than low-fence?",
        a: "Neither is 'better' — they're different programs. High fence gives you full control of genetics and harvest; low fence trades control for larger effective range and lower cost. We represent both and will match the program to your goals.",
      },
      {
        q: "How far is Webb County from San Antonio?",
        a: "Laredo is about 2.5 hours from San Antonio straight down I-35, and ranches in the eastern part of the county can be reached in closer to 2 hours.",
      },
    ],
  },
  {
    slug: "starr-county-texas",
    name: "Starr County",
    seat: "Rio Grande City",
    region: "Rio Grande Plains",
    intro: [
      "Starr County runs from the Rio Grande north into classic South Texas brush, where sandy loam soils grow the forbs and browse that big deer are built on. Historic river towns — Rio Grande City and Roma — anchor the south end, while the north country stays quiet, brushy, and lightly traveled.",
      "The county is a sleeper for sportsmen: strong whitetail, some of the best white-winged dove flights in Texas, and quail in the years the rain cooperates. Cattle still work alongside hunting on many outfits, giving buyers a true dual-income ranch.",
      "For Rio Grande Valley buyers, Starr County is the closest serious ranch country — under an hour from McAllen.",
    ],
    facts: [
      ["County seat", "Rio Grande City"],
      ["Region", "Rio Grande Plains"],
      ["Known for", "Sandy loam soils, white-winged dove, dual cattle/hunting outfits"],
      ["Wildlife", "Whitetail, white-winged dove, quail, javelina, hogs"],
      ["Nearest city", "McAllen (±1 hr)"],
    ],
    faqs: [
      {
        q: "Is Starr County close to the Rio Grande Valley?",
        a: "Yes — Starr County borders the Valley, with Rio Grande City about an hour from McAllen. It's the nearest true ranch country for Valley-based buyers who want hunting land within a comfortable drive.",
      },
      {
        q: "Can a Starr County ranch run cattle and hunt?",
        a: "Many do. The county's grass and brush mosaic supports cow-calf operations alongside quality whitetail habitat, and several of our listings are set up exactly that way — two incomes off one ranch.",
      },
      {
        q: "What does brush country land cost in Starr County?",
        a: "Prices move with soil, water, brush quality, and road frontage, and they change year to year. Call us for current per-acre comps — we track every sale in the county.",
      },
    ],
  },
  {
    slug: "jim-hogg-county-texas",
    name: "Jim Hogg County",
    seat: "Hebbronville",
    region: "Brush Country",
    intro: [
      "Jim Hogg County may be the quietest serious hunting county in South Texas. No interstate crosses it, the ranches run big, and Hebbronville remains a genuine working ranch town. That seclusion is exactly why the wildlife is so good.",
      "The county's deep cenizo and blackbrush country holds outstanding whitetail and some of the most consistent bobwhite quail hunting left in Texas. Large single-family ownerships mean game moves naturally across big country.",
      "For buyers who want privacy, tradition, and neighbors measured in miles, Jim Hogg County is hard to beat.",
    ],
    facts: [
      ["County seat", "Hebbronville"],
      ["Region", "Brush Country"],
      ["Known for", "Seclusion, big ownerships, consistent quail"],
      ["Wildlife", "Whitetail, bobwhite quail, dove, javelina, hogs"],
      ["Nearest city", "Laredo / McAllen (±1.5 hr)"],
    ],
    faqs: [
      {
        q: "Why is Jim Hogg County known for quail?",
        a: "The county's native grass and brush mosaic, large pasture sizes, and light hunting pressure make it one of the most consistent bobwhite counties in South Texas. In good rain years the hunting is exceptional.",
      },
      {
        q: "How remote is Jim Hogg County?",
        a: "Pleasantly remote — no interstate touches the county, and Hebbronville sits roughly 1.5 hours from Laredo, McAllen, and Corpus Christi. Owners come for exactly that seclusion.",
      },
      {
        q: "Are there utilities on rural Jim Hogg County land?",
        a: "Electric co-op lines reach many county roads, but raw tracts often need a water well and may need power extended. We flag utility status on every listing and can quote well drilling before you buy.",
      },
    ],
  },
  {
    slug: "duval-county-texas",
    name: "Duval County",
    seat: "San Diego",
    region: "Brush Country",
    intro: [
      "Duval County is home to Freer — a town whose name is synonymous with big South Texas deer — and the county's reputation among serious whitetail hunters is earned every season. Deep brush, honest soils, and generations of ranching culture define the country.",
      "Beyond deer, Duval County outfits commonly pair cattle with hunting income, and the county's central position puts San Antonio, Corpus Christi, and Laredo all within about two hours.",
      "From raw brush tracts to turnkey lodges, Duval County offers some of the best value-per-acre in the trophy belt.",
    ],
    facts: [
      ["County seat", "San Diego"],
      ["Region", "Brush Country"],
      ["Known for", "Freer big-buck tradition, cattle/hunting combos, value"],
      ["Wildlife", "Whitetail, quail, dove, javelina, hogs"],
      ["Nearest city", "Corpus Christi / Laredo (±1.5–2 hr)"],
    ],
    faqs: [
      {
        q: "What makes Freer famous for deer hunting?",
        a: "Freer sits in the heart of Duval County's deep brush, and its long-running big-buck traditions — including one of the state's best-known deer contests — reflect decades of mature whitetail coming out of the surrounding ranches.",
      },
      {
        q: "Is Duval County a good value for hunting land?",
        a: "Compared to the most famous trophy counties, Duval often trades at a friendlier per-acre number while producing comparable deer — which is why managers hunting for value start their search here.",
      },
      {
        q: "How do I verify a ranch's deer quality before buying?",
        a: "Ask for harvest records, survey data, and game-camera history — and walk the brush diversity yourself. We evaluate habitat on every listing we represent and will give you a straight read on what a property can produce.",
      },
    ],
  },
  {
    slug: "dimmit-county-texas",
    name: "Dimmit County",
    seat: "Carrizo Springs",
    region: "Golden Triangle",
    intro: [
      "Dimmit County is the historic heart of Texas trophy deer country. The red sandy loam around Carrizo Springs and Catarina grows the protein-rich browse that built the South Texas big-buck legend, and the county's name still carries weight in every deer camp in the state.",
      "Today Dimmit County pairs that hunting pedigree with practical access — under two hours from San Antonio — and a mix of high-fenced showplaces, managed low-fence country, and recovering rangeland from the Eagle Ford era.",
      "For buyers chasing the best genetics dirt can grow, this county is the benchmark.",
    ],
    facts: [
      ["County seat", "Carrizo Springs"],
      ["Region", "Golden Triangle"],
      ["Known for", "Historic trophy genetics, red sandy loam, proximity to San Antonio"],
      ["Wildlife", "Trophy whitetail, quail, dove, javelina, hogs"],
      ["Nearest city", "San Antonio (±2 hr)"],
    ],
    faqs: [
      {
        q: "Why is Dimmit County soil important for deer?",
        a: "The county's red sandy loam grows exceptional forbs and browse — the natural protein that builds antler. That soil, as much as genetics, is why the Carrizo Springs–Catarina corridor became the benchmark for Texas trophy whitetail.",
      },
      {
        q: "How far is Dimmit County from San Antonio?",
        a: "Carrizo Springs is roughly two hours from San Antonio via US-57/I-35, making Dimmit one of the most weekend-practical counties in the trophy belt.",
      },
      {
        q: "Did oil and gas activity hurt Dimmit County ranches?",
        a: "The Eagle Ford boom left some ranches with pads, roads, and pipeline easements — and others untouched. Surface condition varies property to property, which is why we walk every acre and disclose exactly what's there.",
      },
    ],
  },
  {
    slug: "la-salle-county-texas",
    name: "La Salle County",
    seat: "Cotulla",
    region: "Golden Triangle",
    intro: [
      "La Salle County pairs storied brush country with the easiest access in the Golden Triangle — I-35 runs straight through Cotulla, putting San Antonio about 90 minutes from the gate. That combination keeps demand for La Salle ranches strong year after year.",
      "The county's whitetail pedigree is proven, its quail country is real, and the Nueces River bottom adds a thread of live water rare in the brush. Cattle grazing remains a working part of many outfits.",
      "From weekend hunting tracts to institutional-scale holdings, La Salle County is where access and genetics meet.",
    ],
    facts: [
      ["County seat", "Cotulla"],
      ["Region", "Golden Triangle"],
      ["Known for", "I-35 access, proven genetics, Nueces River country"],
      ["Wildlife", "Whitetail, quail, dove, javelina, hogs"],
      ["Nearest city", "San Antonio (±1.5 hr)"],
    ],
    faqs: [
      {
        q: "How far is La Salle County from San Antonio?",
        a: "Cotulla sits right on I-35 about 90 minutes south of San Antonio — you can leave the office Friday afternoon and be in a deer blind before dark.",
      },
      {
        q: "Does La Salle County have live water?",
        a: "The Nueces River crosses the county, and properties touching the river bottom carry a premium for the habitat and water it brings. Most upland ranches rely on wells and stock tanks, which we detail on every listing.",
      },
      {
        q: "Is La Salle County land a good investment?",
        a: "Interstate access, proven hunting demand, and steady buyer interest from San Antonio and Austin have historically supported La Salle values. Land is a long hold — but this county's fundamentals are among the strongest in the region.",
      },
    ],
  },
];

export const getCounty = (slug: string) =>
  counties.find((c) => c.slug === slug);
