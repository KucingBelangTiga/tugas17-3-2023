import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer";
import { Orders } from "./Orders";

@Index("user_pkey", ["userId"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn({ type: "integer", name: "user_id" })
  userId: number;

  @Column("character varying", {
    name: "username",
    nullable: true,
    length: 100,
  })
  username: string | null;

  @Column("text", { name: "password", nullable: true })
  password: string | null;

  @Column("timestamp with time zone", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Customer, (customer) => customer.user)
  customers: Customer[];

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];
}
