export interface Channel {
  id: string;
  name: string;
  alt_names: string[];
  network: string;
  owners: string[];
  country: string;
  subdivision: string;
  city: string;
  broadcast_area: string[];
  languages: string[];
  categories: string[];
  is_nsfw: boolean;
  launched: string;
  closed: string;
  replaced_by: string;
  website: string;
  logo: string;
}
