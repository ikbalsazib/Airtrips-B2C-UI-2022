export interface FooterData {
  _id?: string;
  
  address?: string;
  phoneNumbers?: any[];
  emails?: any[];
  description?:string,
  socialLinks?: LinkObject[];
}

export interface LinkObject {
  type: string;
  value: string;
}

