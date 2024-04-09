export type GetIpInfoResponse = {
  as: string; // Autonomous System name
  asn: string; // Autonomous System Number
  city_name: string; // Name of the city
  country_code: string; // ISO country code
  country_name: string; // Name of the country
  ip: string; // IP address
  is_proxy: boolean; // Indicates if the IP is a proxy
  latitude: number; // Geographical latitude
  longitude: number; // Geographical longitude
  region_name: string; // Name of the region/state
  time_zone: string; // Local time zone
  zip_code: string; // Postal/ZIP code
};
