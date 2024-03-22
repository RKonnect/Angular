import { paymentTypeEnum } from "../enum/paymentType.enum";

export interface NewInvitationDto {
    restaurantId: number,
    userMax: number,
    paymentType: paymentTypeEnum,
    invitationDate: Date;
}