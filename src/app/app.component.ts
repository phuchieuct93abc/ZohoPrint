import { Component } from '@angular/core';
import { UploadChangeParam } from 'ng-zorro-antd';
import { Papa } from 'ngx-papaparse';
import { UserStory } from './user-story.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zoho-print';
  selectedFile: File;
  data: { stories: UserStory[], tasks: UserStory[] };

  constructor(private papa: Papa) { }
  
  handleChange({ file, fileList }: UploadChangeParam) {
    this.selectedFile = file.originFileObj;
    const fileReader: FileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      // @ts-ignore
      const result = this.parseData(this.papa.parse(fileReader.result));
      this.data = result;

    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }



  parseData(data): { stories: UserStory[], tasks: UserStory[] } {
    const userStory: UserStory[] = data.data.map(d => new UserStory(d));

    const stories = userStory.filter(s => s.ParentId);
    const tasks = userStory.filter(s => !s.ParentId);

    stories.forEach((s, index) => s.index = index + 1);
    tasks.forEach(t => {
      const us = stories.find(s => s.ItemId === t.ParentId);
      if (us) {
        t.relatedToIndex = us.index;
      } else {
        console.error('can not read us for', t.ParentId);
      }

    });
    return { stories, tasks };
  }
}
