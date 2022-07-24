import { Entity, Column, OneToMany, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { AssetToClient } from "./AssetToClient";
import { Operation } from "./Operation";

@Entity()
export class Asset extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "decimal", scale: 2, precision: 12 })
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

