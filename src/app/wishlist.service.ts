import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private books: any[] = [];

  constructor() {}

  addBook(book: any) {
    this.books.push(book);
  }

  removeBook(book: any) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  getBooks() {
    return this.books;
  }
}
