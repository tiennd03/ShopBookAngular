import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: any[] = [];
  isSearchVisible = false;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  toggleSearch(event: Event) {
    event.preventDefault();
    this.isSearchVisible = !this.isSearchVisible;
  }
}
