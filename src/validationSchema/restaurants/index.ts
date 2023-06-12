import * as yup from 'yup';
import { reservationValidationSchema } from 'validationSchema/reservations';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  phone_number: yup.string().required(),
  email: yup.string().required(),
  cuisine_type: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  user_id: yup.string().nullable().required(),
  reservation: yup.array().of(reservationValidationSchema),
});
