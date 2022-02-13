import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {

    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column({type:'varchar', length: 50})
    author: string;

    @Column({type: 'varchar', length: 200})
    title: string;

    @Column('text')
    coverImage: string;

    @Column({type: 'varchar', length: 10})
    isbn_10: string;

    @Column({default: 0})
    price: number;
}