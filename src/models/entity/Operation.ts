import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Asset } from "./Asset";
import { Client } from "./Client";
import { OperationType } from "../../interfaces/Operation";

@Entity()
export class Operation extends BaseEntity{
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

  @CreateDateColumn()
  created_at: Date;

}