import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orders } from "./Orders";
import { Product } from "./Product";

@Index("order_detail_pkey", ["ordetId"], { unique: true })
@Entity("order_detail", { schema: "public" })
export class OrderDetail {
  @PrimaryGeneratedColumn({ type: "integer", name: "ordet_id" })
  ordetId: number;

  @Column("integer", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("timestamp with time zone", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Orders, (orders) => orders.orderDetails)
  @JoinColumn([{ name: "order_id", referencedColumnName: "orderId" }])
  order: Orders;

  @ManyToOne(() => Product, (product) => product.orderDetails)
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product: Product;
}
