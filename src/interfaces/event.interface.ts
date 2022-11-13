export interface IEvents {
  events: IEvent[];
}

export interface IEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  location: string;
  time: string;
  price: string;
  isFavorite: boolean;
  coverPicture: string;
}
