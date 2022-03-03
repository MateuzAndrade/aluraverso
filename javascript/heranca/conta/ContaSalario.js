import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(){
        super(0,this._cliente,100);
    }
}