import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderDetail } from "./OrderDetail";
import { ProductCategory } from "./ProductCategory";

@Index("product_pkey", ["productId"], { unique: true })
@Entity("product", { schema: "public" })
export class Product {
  @PrimaryGeneratedColumn({ type: "integer", name: "product_id" })
  productId: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("numeric", { name: "price", nullable: true })
  price: string | null;

  @Column("character varying", { name: "image", nullable: true })
  image: string | null;

  @Column("timestamp with time zone", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.product)
  orderDetails: OrderDetail[];

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.products
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: ProductCategory;
}
