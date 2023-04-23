import { ReactNode } from "react";

  export interface Cripto{
    id: string;
    name: string;
    symbol: string;
    slug: string;
    metrics: {
      market_data: {
        rank: ReactNode;
        percent_change_usd_last_24_hours: any;
        price_usd: number;
      };
    };
    image: string;
  };