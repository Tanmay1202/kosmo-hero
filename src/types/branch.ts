export interface Branch {
  id: string;
  name: string;
  title: string;
  city: string;
  address: string;
  pinCode: string;
  phoneNumbers: string[];
  email: string;
  hours: string;
  generalManager: {
    name: string;
    phone: string;
  };
  facilities: string[];
  mapQuery: string;
  isHeadBranch?: boolean;
}
