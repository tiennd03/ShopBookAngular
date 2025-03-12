import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = Object.values(data);
    });
  }

  addToCart(book: any) {
    // Implement your add to cart logic here
    alert(`${book.title} has been added to your cart!`);
  }
}