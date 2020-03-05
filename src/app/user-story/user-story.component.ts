import { Component, OnInit, Input } from '@angular/core';
import { UserStory } from '../user-story.model';

@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.scss']
})
export class UserStoryComponent implements OnInit {
  @Input()
  story: UserStory;
  constructor() { }

  ngOnInit() {
  }

}
