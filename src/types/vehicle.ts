export type VehicleType = 'motorcycle' | 'scooter';

export type MotorcycleCategory = 'Practical Commuter' | 'Executive' | 'Performance' | 'Adventure' | 'Performance Sport';
export type ScooterCategory = 'Modern Family' | 'Commuter Scooter' | 'Family Comfort' | 'Premium Executive' | 'Sporty Urban' | 'Adventure Maxi-Scooter';

export interface VehicleVariant {
  name: string;
  price: string;
  highlights: string[];
}

export interface VehicleColor {
  name: string;
  hex: string;
  image?: string;
}

export interface VehicleSpecs {
  engine: {
    type: string;
    displacement: string;
    maxPower: string;
    maxTorque: string;
    boreStroke?: string;
    fuelSystem: string;
    startingMethod: string;
    cooling?: string;
  };
  transmission: {
    clutchType: string;
    gearbox: string;
  };
  brakesAndTyres: {
    frontBrake: string;
    rearBrake: string;
    frontTyre: string;
    rearTyre: string;
    wheelsType: string;
    brakingSystem?: string;
  };
  suspension: {
    front: string;
    rear: string;
  };
  dimensions: {
    lengthWidthHeight: string;
    wheelbase: string;
    seatHeight: string;
    groundClearance: string;
    fuelTankCapacity: string;
    kerbWeight: string;
  };
  electricals: {
    battery: string;
    headlamp: string;
    tailLamp?: string;
  };
}

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  type: VehicleType;
  category: MotorcycleCategory | ScooterCategory;
  tagline: string;
  startingPrice: string;
  priceBasis: string;
  image: string;
  displacementCc: number;
  mileageClaim?: string;
  keyFeatures: string[];
  variants: VehicleVariant[];
  colors: VehicleColor[];
  specs: VehicleSpecs;
  badge?: string;
  officialUrl: string;
}
