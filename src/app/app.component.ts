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
      Price: {
        title: 'Price'
      }
    }
  };
  
  data = [
    {
      Name: "Enclave",
      Tower: "First",
      Property: "One-BedRoom",
      Price: 20000
    },
    // ... other rows here
    {
      Name: "Alpha",
      Tower: "Second",
      Property: "Two-BedRoom",
      Price: 40000
    },
    {
      Name: "Beta",
      Tower: "Third",
      Property: "three-BedRoom",
      Price: 60000
    },
    {
      Name: "Delta",
      Tower: "Fourth",
      Property: "Four-BedRoom",
      Price: 80000
    },
    {
      Name: "Cimage",
      Tower: "Fifth",
      Property: "Two-BedRoom",
      Price: 60000
    },
    {
      Name: "Green Tea",
      Tower: "First",
      Property: "Four-BedRoom",
      Price: 100000
    },
    {
      Name: "Surya",
      Tower: "First",
      Property: "One-BedRoom",
      Price: 100000
    },
    {
      Name: "Texa",
      Tower: "First",
      Property: "Four-BedRoom",
      Price: 900000
    },
    {
      Name: "Delta-D",
      Tower: "Third",
      Property: "Single-BedRoom",
      Price: 900000
    },
    {
      Name: "vista ",
      Tower: "Five",
      Property: "Two-BedRoom",
      Price: 62000
    },
    {
      Name: "Aroma ",
      Tower: "First",
      Property: "Two-BedRoom",
      Price: 85000
    },
    {
      Name: "Nexa ",
      Tower: "Five",
      Property: "Two-BedRoom",
      Price: 62000
    },
    {
      Name: "Rexa ",
      Tower: "First",
      Property: "Two-BedRoom",
      Price: 32000
    },
    {
      Name: "Decon ",
      Tower: "Three",
      Property: "One-BedRoom",
      Price: 20000
    },
    {
      Name: "TDI ",
      Tower: "Five",
      Property: "Three-BedRoom",
      Price: 62000
    },
    {
      Name: "TDI ",
      Tower: "Second",
      Property: "One-BedRoom",
      Price: 62000
    }
  ];



  
}
