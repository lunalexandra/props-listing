import etsy from "../data/etsy.json";

export interface Item {
  listing_id: number;
  url: string;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  MainImage: {
    url_570xN: string;
  };
}

const items: Item[] = etsy as Item[];

export default items;
