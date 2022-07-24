import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity, CreateDateColumn } from "typeorm";
import { TransactionTypes } from "../../interfaces/Transaction";
import { Client } from "./Client";



@Entity()
export class Transaction extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;  

    @Column({ type: "enum", enum: TransactionTypes})
    type: string;

    @Column({ type: 'decimal', scale: 2, precision: 12 })
    amount: number;

    @ManyToOne(
      () => Client,
      client => client.transactions
    )

    @JoinColumn({
      name: 'client_id'
    })

    client: Client;

    @CreateDateColumn()
    created_at: Date;
}

