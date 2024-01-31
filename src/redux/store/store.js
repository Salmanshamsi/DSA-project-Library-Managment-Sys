import {configureStore } from '@reduxjs/toolkit';
import Book from '../slices/Book';

export const store = configureStore({
  reducer: {
    Book,
  }})