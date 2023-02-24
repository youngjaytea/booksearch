import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private wishlist: any[] = [];

  constructor(private http: HttpClient) { }

  searchBooks(searchTerm: string) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    return this.http.get<any>(url);
  }

  addToWishlist(book: any) {
    if (!this.wishlist.includes(book)) {
      this.wishlist.push(book);
    }
  }

  removeFromWishlist(book: any) {
    const index = this.wishlist.indexOf(book);
    if (index >=0)
      {
        this.wishlist.splice(index, 1);
        }
        }
        getWishlist() {
        return this.wishlist;
        }
        }
