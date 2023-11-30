export interface IFrequentlyOrdered {
  id: number;
  name: string;
  price: number;
  description: string;
  oldPrice: number;
  images: string[];
}

export interface IProducts {
  products: [
    breakfast: IProduct,
    pizza: IProduct,
    combo: IProduct,
    appetizers: IProduct,
    cocktails: IProduct,
    coffee: IProduct,
    beverages: IProduct,
    desserts: IProduct,
    sauces: IProduct,
    otherDoods: IProduct
  ];
}

export interface IProduct {
  id: number;
  idName: string;
  type: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  images: string[];
}
