export interface paymentInterface {
  id:          number;
  user_id:     number;
  peticion_id: number;
  img_pay:     null | string;
  status:      string;
  price:       number;
  created_at:  Date;
  updated_at:  Date;
}
