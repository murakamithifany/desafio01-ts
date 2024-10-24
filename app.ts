import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NovaConta } from './class/NovaConta'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(250)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
console.log(companyAccount)

const novaConta: NovaConta = new NovaConta('Novo',15);
novaConta.getDeposito(100);
console.log(novaConta);