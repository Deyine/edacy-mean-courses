import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './notes/notes.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { NoteService } from './note.service';


@NgModule({
  declarations: [
    NotesComponent,
    ListNotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NoteService],
  exports: [ListNotesComponent, NotesComponent]
})
export class NoteModule { }
