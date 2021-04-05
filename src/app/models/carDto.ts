import { Car } from "./car";

export interface CarDto extends Car{
    carId:number;
    carName:string;
    brandName: string;
    colorName: string; 
}