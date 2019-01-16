export interface CarResponse {
  brand: string;
  cars: Car[];
}

export interface Car {
  price: number;
  model: string;
  year: number;
  brand?: string;
  picture: string;
}
