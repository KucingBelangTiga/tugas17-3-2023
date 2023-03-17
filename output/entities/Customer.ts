import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("customer_pkey", ["customerId"], { unique: true })
@Entity("customer", { schema: "public" })
export class Customer {
  @PrimaryGeneratedColumn({ type: "integer", name: "customer_id" })
  customerId: number;

  @Column("character varying", { name: "firstname", nullable: true })
  firstname: string | null;

  @Column("character varying", { name: "lastname", nullable: true })
  lastname: string | null;

  @Column("timestamp with time zone", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => User, (user) => user.customers)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;
}
