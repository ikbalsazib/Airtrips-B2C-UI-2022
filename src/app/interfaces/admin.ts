export interface Admin {
  readOnly?: boolean;
  _id?: string;
  name: string;
  profileImg?: string;
  email?: string;
  username: string;
  phoneNo: string;
  role: string;
  hasAccess: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
