export class User {
    id: number;
    nickName: string;
    email: string;
    password: string;
    age: number;
    constructor(name: string, mail: string, Password: string, Age: number) {
      this.nickName = name;
      this.email = mail;
      this.password = Password;
      this.age = Age;
    }
  }