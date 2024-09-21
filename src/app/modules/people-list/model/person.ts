export interface PersonsResponse {
  msg:     string;
  success: boolean;
  status:  number;
  data:    Person[];
}

export interface Person {
  createdAt:     Date;
  updatedAt:     Date;
  id:            string;
  nick_name:     string;
  name:          string;
  password:      string;
  surname:       string;
  secondSurname: string;
  email:         string;
  token:         string;
  address:       Address;
}

export interface Address {
  createdAt:     Date;
  updatedAt:     Date;
  id:            string;
  post_code:     number;
  street:        string;
  number_street: number;
  apartment:     string;
  city:          City;
}

export interface City {
  createdAt: Date;
  updatedAt: Date;
  id:        number;
  name:      string;
  country:   Country;
}

export interface Country {
  createdAt: Date;
  updatedAt: Date;
  id:        string;
  name:      string;
}
