export interface UserAuth {
  message:string
  user?:  User;
  token?: string;
}

export interface User {
  id?:                number;
  name?:              string;
  email?:             string;
  cedula?:            string;
  phone?:             string;
  role?:              string;
  email_verified_at?: null;
  created_at?:        Date;
  updated_at?:        Date;
}
