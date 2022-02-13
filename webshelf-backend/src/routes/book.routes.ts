import { DatabaseError } from './../errors/DatabaseError.model';
import { Book } from './../entity/book.entity';
import { NextFunction, Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';

const bookRoutes = Router();

bookRoutes.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        let books = await getRepository(Book).find();
        res.status(200).send(books);
    } catch (error) {
        throw new DatabaseError("Erro ao buscar livros!");
    }
});

bookRoutes.post('/', async (req: Request, res: Response, nex: NextFunction) => {
    try {
        const newBook = await getRepository(Book).save(req.body);
        res.status(201).send(newBook);
    } catch (error) {
        throw new DatabaseError("Erro ao buscar livros!");
    }
})

bookRoutes.put('/:id', async (req: Request<{id: number}>, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const bookChange = req.body;
        await getRepository(Book).update(id, bookChange);
        res.sendStatus(200);
    } catch (error) {
        throw new DatabaseError("Erro ao atualizar livro ");
    }
})

export default bookRoutes;