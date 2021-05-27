//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  open() {
    if (this.isOpen) throw new ValueError();
    this.isOpen = true;
    this._balance = 0;
  }

  close() {
    if (!this.isOpen) throw new ValueError();
    this.isOpen = false;
  }

  deposit(value) {
    if (value < 0 || !this.isOpen) throw new ValueError();
    this._balance += value;
  }

  withdraw(value) {
    if (value < 0 || !this.isOpen || value > this._balance)
      throw new ValueError();
    this._balance -= value;
  }

  get balance() {
    if (!this.isOpen) throw new ValueError();
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
