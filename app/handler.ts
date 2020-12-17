
import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

import { books } from './model';
import { BooksController } from './controller/books';
const booksController = new BooksController(books);

export const create: Handler = async (event: any, context: Context) => {
  return await booksController.create(event, context);
};

export const update: Handler = async (event: any) => await booksController.update(event);

export const find: Handler = async () => await booksController.find();

export const findOne: Handler = async (event: any, context: Context) => {
  return await booksController.findOne(event, context);
};

export const deleteOne: Handler = async (event: any) => await booksController.deleteOne(event);
