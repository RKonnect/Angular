import { GenderEnum } from "../enum/gender.enum";

export interface UserCommonInfoDto {
    name: string,
    surname: string,
    pseudo: string,
    gender: GenderEnum,
    dateOfBirth: Date,
}
