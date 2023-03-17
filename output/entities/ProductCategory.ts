import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";

@Index("product_category_pkey", ["categoryId"], { unique: true })
@Entity("product_category", { schema: "public" })
export class ProductCategory {
  @PrimaryGeneratedColumn({ type: "integer", name: "category_id" })
  categoryId: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("timestamp with time zone", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
