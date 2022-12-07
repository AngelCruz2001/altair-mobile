export interface IEvents {
  events: IEvent[];
}

export interface IEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
  place: string;
  prices: IPrices[];
  isFavorite: boolean;
  coverPicture: string;
  organizer: {
    name: string;
    profilePicture: string;
  };
}

export interface IPrices {
  type: string;
  value: number;
  color: string;
}
