import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';
import { Sale } from './sale.entity';

@Entity()
export class SaleItem {

    @PrimaryColumn({type: 'int', name: 'itemId'})
    @ManyToOne(() => Book, {
        nullable: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    item: Book;

    @PrimaryColumn({type: 'int', name: 'saleId'})
    @ManyToOne(() => Sale, sale => sale.itemList, {
        nullable: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    })
    @JoinColumn()
    sale?: Sale;

    @Column()
    quantity: number;
}