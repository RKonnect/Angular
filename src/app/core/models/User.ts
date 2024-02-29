import {GenderEnum} from "./enum/gender.enum";
import {RoleEnum} from "./enum/role.enum";

export interface User {
  id?: number,
  name?: string,
  surname?: string,
  pseudo?: string,
  email?: string,
  password?: string,
  biography?: string,
  avatar?: string,
  gender?: GenderEnum,
  role?: RoleEnum,
  dateOfBirth?: Date,
  created_at?: Date,
  updated_at?: Date
}
