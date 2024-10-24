import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (valor: number): void => {
    if (this.getStatus()) {
      this.balance = this.balance + valor;
      console.log('Voce pegou um empréstimo')
    } else {
      console.log('Conta não permitida');
    }
  }

}
