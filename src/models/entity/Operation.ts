import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Asset } from "./Asset";
import { Client } from "./Client";

export enum OperationType {
  // eslint-disable-next-line no-unused-vars
  PURCHASE = "purchase",
  // eslint-disable-next-line no-unused-vars
  SELL = "sell"
}

@Entity()
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'client_id' })
  @ManyToOne(() => Client, client => client.assetToClient)
  client: Client;

  @JoinColumn({ name: 'asset_id' })
  @ManyToOne(() => Asset, asset => asset.assetToClient)
  asset: Asset;

  @Column({type: 'enum', enum: OperationType})
  type: string;

  @Column()
  amount: number;

}