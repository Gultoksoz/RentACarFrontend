import {Rental} from "./rental";

export interface RentalDetail extends Rental{
    carName: string;
    customerName: string;
    rentDate:Date;
    returnDate:Date;
}