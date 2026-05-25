export type Service = {
  slug: string
  label: string
  short: string
  description: string
  details: string[]
  image?: string
}

export const services: Service[] = [
  {
    slug: 'property-care',
    label: 'Property Care',
    short: 'Daily oversight that keeps your home immaculate.',
    image: '/property-care.jpg',
    description:
      'Routine walk-throughs, preventive maintenance, and quiet stewardship of every system that makes a private home work, from climate to lighting to water. We anticipate the issues that interrupt a household and resolve them before they reach you.',
    details: [
      'Daily and weekly interior + exterior walk-throughs',
      'HVAC, filtration, and climate-zone monitoring',
      'Home-automation troubleshooting',
      'Pool, spa, and water-feature management',
      'Indoor and landscape lighting systems',
      'Sewer, sump, and waste-system upkeep',
    ],
  },
  {
    slug: 'vendor-management',
    label: 'Vendor Management',
    short: 'A single point of contact for every trade.',
    image: '/vendor-management.jpg',
    description:
      'We coordinate, schedule, and supervise the network of specialists your property requires, from arborists to AV technicians, so you never field a service call yourself. Every vendor is vetted, scheduled discreetly, and reviewed on completion.',
    details: [
      'Sourcing, vetting, and onboarding of trusted trades',
      'Scheduling and on-site supervision',
      'Generator, gate, and security-system inspections',
      'Roof, gutter, and exterior maintenance cycles',
      'Pest control and arbor health programs',
      'Quality review and invoice reconciliation',
    ],
  },
  {
    slug: 'private-concierge',
    label: 'Private Concierge',
    short: 'Reservations, errands, and the small things that matter.',
    image: '/private-concierge.jpg',
    description:
      'A quiet engine behind your social and personal calendar. From last-minute restaurant tables to bespoke event planning, our concierge team handles the requests that fall between assistants and household staff.',
    details: [
      'Restaurant, salon, and spa reservations',
      'Event tickets and private experiences',
      'Personal shopping and household provisioning',
      'Delivery, pick-up, and courier coordination',
      'Pet care and travel arrangements for animals',
      'Bespoke planning for in-home gatherings',
    ],
  },
  {
    slug: 'internal-staffing',
    label: 'Internal Staffing Solutions',
    short: 'Discreet hiring for the people closest to your home.',
    image: '/internal-staffing.jpg',
    description:
      'Recruiting, screening, and placement of the household team, from housekeepers and chefs to estate managers and security personnel. Every candidate is background-checked and matched to the specific rhythm of your home.',
    details: [
      'Estate managers and house managers',
      'Live-in and day housekeeping',
      'Private chefs and household cooks',
      'Personal assistants and tutors',
      'Security and protection details',
      'Grounds, garden, and handyman staff',
    ],
  },
  {
    slug: 'transportation-travel',
    label: 'Transportation & Travel',
    short: 'Movement, on your schedule, without friction.',
    image: '/transportation-travel.jpg',
    description:
      'A licensed ground transportation operation paired with full travel coordination. Whether it is an airport transfer in a Mercedes S-Class or a multi-leg international itinerary, we plan, book, and execute with quiet precision.',
    details: [
      'Chauffeured ground transport (Cadillac Escalade, Mercedes S-Class, Sprinter)',
      'Airport meet-and-greet and transfers',
      'Hotel, rental car, and itinerary booking',
      'Domestic and international travel planning',
      'Multi-property travel logistics',
      'TCP 48909 licensed operation',
    ],
  },
  {
    slug: 'logistics-management',
    label: 'Full-Service Logistics Management',
    short: 'Storage, fulfillment, and on-site coordination for every household movement.',
    image: '/logistics-management.jpg',
    description:
      'A complete logistics operation behind your home: secure climate-controlled warehousing, inventory management, scheduled deliveries, and full event setup and breakdown. We move, store, and stage the items that make a household run, so nothing arrives early, nothing leaves late, and nothing sits in your driveway.',
    details: [
      'Climate-controlled warehouse storage and inventory tracking',
      'Receiving, fulfillment, and last-mile delivery',
      'Kitting and collating',
      'Event setup, on-site coordination, and same-day breakdown',
      'Furniture rotation and seasonal staging',
      'Art, wine, and high-value item handling',
      'Vendor coordination and on-site supervision',
    ],
  },
  {
    slug: 'private-jet-chartering',
    label: 'Private Jet Chartering',
    short: 'Private aviation, arranged in-house.',
    image: '/private-jet-chartering.jpg',
    description:
      'Direct access to a curated network of operators, aircraft, and crews. We charter on your terms (short-notice repositioning, single legs, or recurring routes) without the friction of an outside broker.',
    details: [
      'Light, mid, super-midsize, and heavy jets',
      'Empty-leg sourcing and repositioning flights',
      'Crew, catering, and ground coordination',
      'Customs and international handling',
      'Pet and equipment logistics',
      'Discrete billing and trip reporting',
    ],
  },
]
