import { Entity, Column, OneToMany, BaseEntity, PrimaryGeneratedColumn } from "typeorm";
import { AssetToClient } from "./AssetToClient";
import { Operation } from "./Operation";
import { Transaction } from "./Transaction";

@Entity()
export class Client extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true})
    email: string;

    @Column()
    password: string;

    @Column({type: 'numeric'})
    balance: number;

    @OneToMany(
        () => Transaction,
        transaction => transaction.client
    )
    transactions: Transaction[];

    @OneToMany(
        () => AssetToClient,
        assetToClient => assetToClient.client
    )
    assetToClient: AssetToClient[];

    @OneToMany(
        () => Operation,
        operation => operation.client
    )
    operation: Operation[];
}
