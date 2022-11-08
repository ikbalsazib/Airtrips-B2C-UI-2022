import { PackageCategory } from "./package-category";

export interface Package {
    packageName:string,
    packageSlug:string,
    packageCategory:string|PackageCategory,
    tourDurationDays?:string,
    tourDurationNights?:string,
    groupSize?:number,
    language?:string,
    primaryImage:string,
    images?:string[],
    highlight?:string[],
    initialPrice:number,
    discountType?:number,
    discountAmount?:number,
    finalPrice:number,
    includingOffers?:string[],
    excludingOffers?:string[],
    additionalOffers?:string[],
    limit?:number,
    packageVisibility?:boolean,
    paymentPolicy?:string,

}
