export interface Category {
    id: string;
    name: string;
    subCategories: SubCategory[];
}

export interface SubCategory {
    id: string;
    name: string;
    url: string;
}

export interface ProductStatistic {
    numberOfSales: number;
    totalSales: number;
}

export interface ProductMetadata {
    votes: number;
    score: number;
}

export interface Product {
    mode: string;
    userDefinedId: string;
    url: string;
    price: number;
    name: string;
    description: string;
    image: string;
    archived: boolean;
    statistics: ProductStatistic;
    customFields: unknown[];
    metadata: ProductMetadata;
    id: string;
    creationDate: Date;
    modificationDate: Date;
}

export interface Order {
    token: string;
    creationDate: Date;
    modificationDate: Date;
    status: string;
    paymentMethod: string;
    invoiceNumber: string;
    email: string;
    cardHolderName: string;
    creditCardLast4Digits: number;
    billingAddressName: string;
    billingAddressCompanyName: string;
    billingAddressAddress1: string;
    billingAddressAddress2: string;
    billingAddressCity: string;
    billingAddressCountry: string;
    billingAddressProvince: string;
    billingAddressPostalCode: string;
    billingAddressPhone: string;
    notes: string | null;
    shippingAddressName: string;
    shippingAddressCompanyName: string;
    shippingAddressAddress1: string;
    shippingAddressAddress2: string;
    shippingAddressCity: string;
    shippingAddressCountry: string;
    shippingAddressProvince: string;
    shippingAddressPostalCode: string;
    shippingAddressPhone: string;
    shippingAddressSameAsBilling: boolean;
    finalGrandTotal: number;
    shippingFees: number;
    shippingMethod: string;
    items: [];
    taxes: [];
    promocodes: [];
    willBePaidLater: boolean;
    customFields: [],
    paymentTransactionId: string;
}

export interface ProductsResponse {
  totalItems: number;
  offset: number;
  limit: number;
  items: Product[];
}

export interface SnipcardError {
    message: string;
    errors: {
        parameter: unknown[];
    }
}

export interface Customer {
    id: string;
    email: string;
    billingAddressName: string;
    billingAddressCompanyName: string;
    billingAddressAddress1: string;
    billingAddressAddress2: string | null;
    billingAddressCity: string;
    billingAddressCountry: string;
    billingAddressProvince: string;
    billingAddressPostalCode: string;
    billingAddressPhone: string;
    shippingAddressName: string;
    shippingAddressCompanyName: string;
    shippingAddressAddress1: string;
    shippingAddressAddress2: string | null;
    shippingAddressCity: string;
    shippingAddressCountry: string;
    shippingAddressProvince: string;
    shippingAddressPostalCode: string;
    shippingAddressPhone: string;
    shippingAddressSameAsBilling: boolean;
    sessionToken: string | null;
    status: string;
    statistics: {
        ordersCount: number;
        ordersAmount: number;
    }
}