import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoteModule } from './note/note.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
