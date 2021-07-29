import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url : string = "http://localhost:3000/books";
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    // perform the appropriate API call here that will get the books from the server
    return this.http.get<Book[]>(this.url);
  }

  addBook(book: Book): Observable<Book> {
    // perform the appropriate API call here that will add a book to the server
    if(book != null) {
      return this.http.post<Book>(this.url,book,{
        headers:new HttpHeaders({'Content-Type': 'application/json'})
      });
  }

  }
}
