import { Product } from "./Product";
export declare class ProductCategory {
    categoryId: number;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    products: Product[];
}
