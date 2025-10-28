export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    inStock: boolean;
}
export interface CartItem {
    product: Product;
    quantity: number;
}
export interface CheckoutRequest {
    items: CartItem[];
    successUrl: string;
    cancelUrl: string;
}
export interface CheckoutResponse {
    sessionId: string;
    url: string;
}
//# sourceMappingURL=index.d.ts.map