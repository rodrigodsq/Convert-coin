
export interface ICoins
{
  key: string;
  value: string;
}

export interface IListConverted
{
  from: ICoins;
  to: ICoins;
  currency: number;
}
