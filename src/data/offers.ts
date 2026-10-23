import { Offer } from '../types/offer';

export const OFFERS: Offer[] = [
  {
    id: 'hero-exchange-bonanza',
    title: 'Hero Sure Grand Two-Wheeler Exchange Bonanza',
    subtitle: 'Upgrade any old motorcycle or scooter to a new Hero',
    applicableModels: ['XPulse 200 4V', 'Xtreme 160R 4V', 'Xtreme 250R', 'New Destini 125'],
    benefitAmount: 'Up to ₹ 7,500',
    description: 'Get an additional exchange valuation bonus on top of your existing bike price when trading in at any Kosmo Hero dealership across Punjab.',
    validity: 'Valid through this festive season (30th November)',
    terms: [
      'Applicable on exchange of any two-wheeler brand/model.',
      'Physical inspection required at any Kosmo Hero Jalandhar branch (Lamba Pind, Model House, or Opp. Bus Stand).',
      'Original RC, insurance, and valid Aadhaar of the owner required.',
    ],
    badge: 'Popular Exchange',
  },
  {
    id: 'hero-fincorp-low-roi',
    title: 'Hero FinCorp Special 6.99% Low-Interest Finance',
    subtitle: 'Spot approval with minimal paperwork in 15 minutes',
    applicableModels: ['Splendor+', 'Splendor+ XTEC 2.0', 'HF Deluxe', 'Passion+'],
    benefitAmount: 'Starting Down Payment ₹ 4,999',
    description: 'Drive home Indias mileage champion with low monthly EMIs starting at ₹ 1,899/month. Instant spot loan sanction available at all branch finance counters.',
    validity: 'Ongoing Dealership Scheme',
    terms: [
      'Scheme powered by Hero FinCorp & partner retail banks.',
      'Subject to credit profile and CIBIL score verification.',
      'Processing fees and documentation charges as applicable.',
    ],
    badge: 'Low Down Payment',
  },
  {
    id: 'corporate-student-privilege',
    title: 'Corporate & Government Employee Privilege Scheme',
    subtitle: 'Exclusive cash discount and accessory voucher',
    applicableModels: ['Xtreme 125R', 'Xoom 110', 'Destini Prime', 'Super Splendor XTEC'],
    benefitAmount: 'Benefits up to ₹ 3,000',
    description: 'Special benefits for corporate executives, defense personnel, doctors, and students on presenting valid ID cards at the time of booking.',
    validity: 'Valid across all Punjab branches',
    terms: [
      'Requires valid employee badge or student identity proof.',
      'Cannot be clubbed with certain promotional cash discounts.',
    ],
    badge: 'Exclusive Privilege',
  },
  {
    id: 'hero-joyride-festive-bundle',
    title: 'Free 1-Year Hero Joyride Maintenance Package',
    subtitle: 'With every XPulse 200 4V and Xtreme 250R booking',
    applicableModels: ['XPulse 200 4V', 'Xtreme 250R', 'Xtreme 160R 4V'],
    benefitAmount: 'Worth ₹ 1,499 Free',
    description: 'Enjoy free labor on scheduled services, free foam washes, and 5% discount on genuine Hero engine oil and replacement parts for 12 months.',
    validity: 'Limited period offer for premium riders',
    terms: [
      'Redeemable across all 4 Kosmo Hero authorized service centers.',
      'Non-transferable to other vehicles.',
    ],
    badge: 'AMC Gift',
  },
];
