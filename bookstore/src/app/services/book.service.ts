import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://openlibrary.org/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    const isbns = ['OL7353617M', 'OL26431930M', 'OL26431929M'];
    const query = isbns.map(isbn => `bibkeys=OLID:${isbn}`).join('&');
    return this.http.get<any>(`${this.apiUrl}?${query}&format=json&jscmd=data`).pipe(
      map(response => Object.values(response)) // Convert the response object to an array
    );
  }

  getBookById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?bibkeys=OLID:${id}&format=json&jscmd=data`);
  }
}