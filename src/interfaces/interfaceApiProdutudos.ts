export interface ProductsList {
  id?: number;
  image?: string;
  name?: string;
  price?: number;
  discount?: number;
  priceMember?: number;
  priceNonMember?: number;
  type?: string;
  classification?: string;
  size?: string;
  rating?: number;
  avaliations?: number;
  country?: string;
  region?: string;
  flag?: string;
  sommelierComment?: string;
}
export interface ProductsListLocal {
  qtd?: number;
  id?: number;
  image?: string;
  name?: string;
  price?: number;
  discount?: number;
  priceMember?: number;
  priceNonMember?: number;
  type?: string;
  classification?: string;
  size?: string;
  rating?: number;
  avaliations?: number;
  country?: string;
  region?: string;
  flag?: string;
  sommelierComment?: string;
}


export interface returnApiProdutos {
  page?: number;
  totalPages?: number;
  itemsPerPage?: number;
  totalItems?: number;
  items?: ProductsList[]
}