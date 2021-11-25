import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BuildingRecords';
  settings = {
    columns: {
      Name: {
        title: 'Building Name'
      },
      Tower: {
        title: 'Tower'
      },
      Property: {
        title: 'Property Type'
      },
      email: {
        title: 'CongigurationName'
      }
    }
  };
  
  data = [
    {
      Name: 1,
      Tower: "Leanne Graham",
      Property: "Bret",
      email: "Sincere@april.biz"
    },
    // ... other rows here
    {
      Name: 11,
      Tower: "Nicholas DuBuque",
      Property: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
}
