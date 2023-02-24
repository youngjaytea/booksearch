import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  books: any[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.books = this.wishlistService.getBooks();
  }

  removeBook(book: any) {
    this.wishlistService.removeBook(book);
    this.books = this.wishlistService.getBooks();
  }
}
