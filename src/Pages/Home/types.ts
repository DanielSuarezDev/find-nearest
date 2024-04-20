export type City = {
  country: string;
  name: string;
  lat: string | number;
  lng: string | number;
};

export interface PropsHome {
  cityOptions: {
    label: string;
    value: string;
  }[];
  handleCitySelect: (
    option: {
      label: string;
      value: string;
    } | null
  ) => void;
  selectedOption:
    | {
        label: string;
        value: string;
      }
    | [];
  selectedCity: City | null;
  nearbyCities: City[];
  cities: City[];
}

export interface PropsView {
  selectedCity: City | null;
  nearbyCities: City[];
  cities: City[];
}

export interface PropsViewSearch {
  cityOptions: {
    label: string;
    value: string;
  }[];
  handleCitySelect: (
    option: {
      label: string;
      value: string;
    } | null
  ) => void;
  selectedOption:
    | {
        label: string;
        value: string;
      }
    | [];
}
