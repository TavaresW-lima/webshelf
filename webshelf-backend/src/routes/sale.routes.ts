import { DatabaseError } from './../errors/DatabaseError.model';
import { NextFunction, Request, Response, Router } from 'express';
import { getConnection } from 'typeorm';
import { Sale } from '../entity/sale.entity';
import { SaleItem } from '../entity/saleItem.entity';

const saleRoutes = Router();

saleRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const transientSale: Sale = req.body;
        transientSale.totalValue = transientSale.itemList.reduce((acc, next) => {
            return acc += (next.item.price * next.quantity);
        }, 0);
        const newSale: Sale = await getConnection().manager.save(Sale, transientSale);
        const itemList: SaleItem[] = newSale.itemList;
        for(let item of itemList) {
            item.sale = newSale;
            await getConnection().manager.save(SaleItem, item);
        }
        res.status(200).send(newSale);
    } catch (error) {
        throw new DatabaseError("Erro ao criar venda");
    }

})

export default saleRoutes;


