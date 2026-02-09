import productsData from './products.json';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface ProductsData {
  products: Product[];
}

export const products: Product[] = productsData.products;

export default productsData;
