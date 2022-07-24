import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Asset } from "./Asset";
import { Client } from "./Client";

@Entity()
export class AssetToClient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'client_id' })
  @ManyToOne(() => Client, client => client.assetToClient)
  client: Client;

  @JoinColumn({ name: 'asset_id' })
  @ManyToOne(() => Asset, asset => asset.assetToClient)
  asset: Asset;

  @Column()
  amount: number;

}