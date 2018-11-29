import { Item } from './item.model';

export class Registro{
    constructor(public idregistro : string, public salesperson: string, public product: string, public items : Item[]){}
}