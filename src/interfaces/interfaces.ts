export interface Item {
    id: string,
    name: string,
    image: string,
    price: number,
    category: string,
    brand: string
}

// User type/interface
export interface User {
    email: string;
    password: string;
  }
  
  // Registration form type/interface
  export interface RegistrationForm {
    email: string;
    password: string;
    name: string;
    surname: string;
    adress: string
  }