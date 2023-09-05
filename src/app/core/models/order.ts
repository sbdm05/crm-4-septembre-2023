import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI{
  tjmHt = 1200 ;
  typePresta!: string;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  client!: string;
  comment!: string;
  id!: number;
}

new Order()