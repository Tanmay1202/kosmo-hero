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
  facilities: string[];
  mapQuery: string;
  isHeadBranch?: boolean;
  isUpcoming?: boolean;
}
