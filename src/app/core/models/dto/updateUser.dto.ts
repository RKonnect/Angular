import {GenderEnum} from "../enum/gender.enum";

export interface UpdateUserDto {
  name?: string,
  surname?: string,
  pseudo: string,
  biography?: string,
  avatar?: string,
  gender?: GenderEnum,
}
