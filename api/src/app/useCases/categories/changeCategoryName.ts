import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function changeCategoryName(req: Request, res: Response){
  try {
    const { categoryId } = req.params;
    const { name } = req.body;

    if(!name){
      return res.status(400).json({error: 'Name is required!'});
    }

    await Category.findByIdAndUpdate(categoryId, {name});
    res.sendStatus(204);
  }
  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
