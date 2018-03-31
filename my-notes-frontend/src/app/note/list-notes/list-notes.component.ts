import { Component, OnInit } from '@angular/core';
import { Note } from '../notes/note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {

    this.noteService.getAll().subscribe(res => {
      console.log('C est OK', res);
    }, err => {
      console.log('Erreur');
    });
  }

}
