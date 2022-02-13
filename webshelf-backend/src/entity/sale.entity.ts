import { SaleItem } from './saleItem.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';

@Entity()
export class Sale {

    @PrimaryGeneratedColumn('increment')
    id?: number;
    
    @CreateDateColumn()
    date: Date;

    @Column()
    totalValue: number = 0;

    @OneToMany(() => SaleItem, saleItem => saleItem.sale)
    itemList: SaleItem[];

}