import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../user-story.model';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  @Input()
  data: { stories: UserStory[], tasks: UserStory[] };
  constructor() { }

  ngOnInit() {
  }

}
