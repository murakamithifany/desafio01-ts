import { DioAccount } from "./DioAccount"

export class NovaConta extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
      }
    getDeposito = (valor: number): void => {
    if (this.getStatus()) {
      this.balance = this.balance + valor + 10;
      console.log('Deposito realizado')
    } 
  }

}
