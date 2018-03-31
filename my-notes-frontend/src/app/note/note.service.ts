import { HttpClient } from '@angular/common/http';
import { Note } from './notes/note';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {

  constructor(private http: HttpClient) { }

  getAll (): Observable<Note[]> {
    return this.http.get<Note[]>('/api/notes');
  }
}
