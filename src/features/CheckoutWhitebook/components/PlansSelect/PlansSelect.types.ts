type Plan = {
    id: number;
    storeId: string;
    title: string;
    description: string;
    caption: string;
    fullPrice: number;
    discountAmmount: number;
    discountPercentage: number;
    periodLabel: string;
    period: string;
    discountCouponCode: null | string;
    order: number;
    priority: number;
    gateway: string;
    splittable: boolean;
    installments: number;
    acceptsCoupon: boolean;
};
  
export type Plans = Plan[];
