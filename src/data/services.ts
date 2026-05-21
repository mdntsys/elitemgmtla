export type Service = {
  slug: string
  label: string
  short: string
  description: string
  details: string[]
}

export const services: Service[] = [
  {
    slug: 'property-care',
    label: 'Property Care',
    short: 'Daily oversight that keeps your home immaculate.',
    description:
      'Routine walk-throughs, preventive maintenance, and quiet stewardship of every system that makes a private home work — from climate to lighting to water. We anticipate the issues that interrupt a household and resolve them before they reach you.',
    details: [
      'Daily and weekly interior + exterior walk-throughs',
      'HVAC, filtration, and climate-zone monitoring',
      'Crestron, Lutron, and home-automation troubleshooting',
      'Pool, spa, and water-feature management',
      'Indoor and landscape lighting systems',
      'Sewer, sump, and waste-system upkeep',
    ],
  },
  {
    slug: 'vendor-management',
    label: 'Vendor Management',
    short: 'A single point of contact for every trade.',
    description:
      'We coordinate, schedule, and supervise the network of specialists your property requires — from arborists to AV technicians — so you never field a service call yourself. Every vendor is vetted, scheduled discreetly, and reviewed on completion.',
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
    slug: 'domestic-staffing',
    label: 'Domestic Staffing',
    short: 'Discreet hiring for the people closest to your home.',
    description:
      'Recruiting, screening, and placement of the household team — from housekeepers and chefs to estate managers and security personnel. Every candidate is background-checked and matched to the specific rhythm of your home.',
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
    slug: 'private-jet-chartering',
    label: 'Private Jet Chartering',
    short: 'Private aviation, arranged in-house.',
    description:
      'Direct access to a curated network of operators, aircraft, and crews. We charter on your terms — short-notice repositioning, single legs, or recurring routes — without the friction of an outside broker.',
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
