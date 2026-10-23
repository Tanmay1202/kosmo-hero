export interface ServiceInterval {
  serviceNumber: string;
  intervalKm: string;
  intervalDays: string;
  type: 'Free' | 'Paid';
  workDone: string[];
}

export const SERVICE_SCHEDULE: ServiceInterval[] = [
  {
    serviceNumber: '1st Free Service',
    intervalKm: '500 - 750 km',
    intervalDays: '60 Days',
    type: 'Free',
    workDone: ['Engine Oil Replacement', 'Valve Clearance Check', 'Brake Adjustment', 'General Wash & Inspection'],
  },
  {
    serviceNumber: '2nd Free Service',
    intervalKm: '3000 - 3500 km',
    intervalDays: '100 Days',
    type: 'Free',
    workDone: ['Air Filter Cleaning', 'Spark Plug Inspection', 'Drive Chain Clean & Lube', 'Battery Voltage Check'],
  },
  {
    serviceNumber: '3rd Free Service',
    intervalKm: '6000 - 6500 km',
    intervalDays: '200 Days',
    type: 'Free',
    workDone: ['Engine Oil Replacement', 'Oil Strainer Screen Clean', 'Carburetor / FI Diagnostic Scan', 'Brake Shoe Check'],
  },
  {
    serviceNumber: '4th Free Service',
    intervalKm: '9000 - 9500 km',
    intervalDays: '300 Days',
    type: 'Free',
    workDone: ['Secondary Air System Check', 'Clutch Play Setting', 'Suspension Tightness', 'Full Diagnostic Report'],
  },
  {
    serviceNumber: '5th Free Service',
    intervalKm: '12000 - 12500 km',
    intervalDays: '400 Days',
    type: 'Free',
    workDone: ['Engine Oil Replacement', 'Spark Plug Replacement', 'Brake Fluid Top-up', 'Fuel Lines Inspection'],
  },
];

export const JOYRIDE_BENEFITS = [
  {
    title: 'Up to 30% Off On Service Labor',
    description: 'Enjoy guaranteed discounts on all periodic scheduled labor and minor workshop jobs.',
  },
  {
    title: '5% Discount on Genuine Parts & Lubricants',
    description: 'Special member pricing on all Hero Genuine Spare Parts, filters, and 4T Plus Engine Oil.',
  },
  {
    title: 'Free High-Pressure Foam Vehicle Washes',
    description: 'Complimentary computerized foam wash & polish with every scheduled workshop checkup.',
  },
  {
    title: 'Priority Workshop Bay Scheduling',
    description: 'Dedicated express service bays ensuring prompt 90-minute turnaround time.',
  },
];

export const WARRANTY_DETAILS = {
  motorcycles: {
    duration: '5 Years',
    kilometers: '70,000 Kilometers',
    scope: 'Comprehensive coverage against manufacturing defects in engine, electricals, and critical mechanical parts.',
  },
  scooters: {
    duration: '5 Years',
    kilometers: '50,000 Kilometers',
    scope: 'Complete warranty on engine block, variomatic CVT transmission, frame, and digital instrument consoles.',
  },
};
