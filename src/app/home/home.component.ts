import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm = '';
  bookList: any[] = [];

  constructor(private bookService: BookService) { }

  search() {
    this.bookService.searchBooks(this.searchTerm).subscribe(
      data => this.bookList = data.items,
      error => console.log(error)
    );
  }

  addToWishlist(book: any) {
    this.bookService.addToWishlist(book);
  }
}
