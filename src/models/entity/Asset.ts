import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AssetToClient } from "./AssetToClient";
import { Operation } from "./Operation";

@Entity()
export class Asset {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @OneToMany(
        () => AssetToClient,
        assetToClient => assetToClient.asset
    )
    assetToClient: AssetToClient[];

    @OneToMany(
        () => Operation,
        operation => operation.asset
    )
    operation: Operation[];

    @Column()
    amount: number;

}

