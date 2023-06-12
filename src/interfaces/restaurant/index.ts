import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  name: string;
  address: string;
  phone_number: string;
  email: string;
  cuisine_type: string;
  description?: string;
  image?: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  reservation?: ReservationInterface[];
  user?: UserInterface;
  _count?: {
    reservation?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  cuisine_type?: string;
  description?: string;
  image?: string;
  user_id?: string;
  tenant_id?: string;
}
