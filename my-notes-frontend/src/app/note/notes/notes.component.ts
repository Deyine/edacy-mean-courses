import {
  Component,
  OnInit
} from '@angular/core';
import {
  Note
} from './note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  note: Note = {
    title: 'Je dois maitriser Angular',
    description: 'Facile !'
  };

  constructor() {}

  ngOnInit() {

  }

}
