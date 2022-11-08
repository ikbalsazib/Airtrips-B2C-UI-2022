

export interface User {
  _id?: string;
  fullName?: string;
  name?: string;
  username?: string;
  gender?: string;
  age?: number;
  passportOrNid?: string;
  nationality?: string;
  birthdate?: Date;
  email?: string;
  phoneNo?: string;
  address?: string;
  profileImg?: string;
  password?: string;
  isPhoneVerified?: boolean;
  isEmailVerified?: boolean;
  registrationType?: string;
  registrationAt?: Date;
  hasAccess?: boolean;
  // occupation?: string;
  createdAt?: any;
  updatedAt?: any;
}
