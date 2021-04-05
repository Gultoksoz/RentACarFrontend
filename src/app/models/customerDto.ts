import {Customer} from "./customer";

export interface CustomerDto extends Customer{
  firstName: string;
  lastName: string;
  email: string;
}