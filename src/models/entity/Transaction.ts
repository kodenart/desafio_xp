import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "./Client";

export enum TransactionTypes {
  // eslint-disable-next-line no-unused-vars
  DEPOSIT = 'deposit',
  // eslint-disable-next-line no-unused-vars
  WITHDRAW = 'withdraw'
}

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;  

    @Column({ type: "enum", enum: TransactionTypes})
    type: string;

    @Column({ type: 'numeric'})
    amount: number;

    @ManyToOne(
      () => Client,
      client => client.transactions
    )

    @JoinColumn({
      name: 'client_id'
    })

    client: Client;

}

