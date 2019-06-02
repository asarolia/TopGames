import { Component, OnInit } from '@angular/core';
import { IGames } from './IGames';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  pageTitle:string= "Top Selling Games";
  listFilter:string = "";

  topGamesList:IGames[] =[];

  myStorageList:[] = [];

  myStorage:any = window.localStorage;


  constructor() { }

  ngOnInit():void {

    // implement few entries for test purpose before implementing service

    this.topGamesList = [
      {
          "Rank": "1",
          "Name": "Wii Sports",
          "Platform": "Wii",
          "Year": "2006",
          "Genre": "Sports",
          "Publisher": "Nintendo",
          "Global_Sales": "82.74",
          "": ""
      },
      {
          "Rank": "2",
          "Name": "Super Mario Bros.",
          "Platform": "NES",
          "Year": "1985",
          "Genre": "Platform",
          "Publisher": "Nintendo",
          "Global_Sales": "40.24",
          "": ""
      },
      {
          "Rank": "3",
          "Name": "Mario Kart Wii",
          "Platform": "Wii",
          "Year": "2008",
          "Genre": "Racing",
          "Publisher": "Nintendo",
          "Global_Sales": "35.82",
          "": ""
      },
      {
          "Rank": "4",
          "Name": "Wii Sports Resort",
          "Platform": "Wii",
          "Year": "2009",
          "Genre": "Sports",
          "Publisher": "Nintendo",
          "Global_Sales": "33",
          "": ""
      },
      {
          "Rank": "5",
          "Name": "Pokemon Red/Pokemon Blue",
          "Platform": "GB",
          "Year": "1996",
          "Genre": "Role-Playing",
          "Publisher": "Nintendo",
          "Global_Sales": "31.37",
          "": ""
      },
      {
          "Rank": "6",
          "Name": "Tetris",
          "Platform": "GB",
          "Year": "1989",
          "Genre": "Puzzle",
          "Publisher": "Nintendo",
          "Global_Sales": "30.26",
          "": ""
      },
      {
          "Rank": "7",
          "Name": "New Super Mario Bros.",
          "Platform": "DS",
          "Year": "2006",
          "Genre": "Platform",
          "Publisher": "Nintendo",
          "Global_Sales": "30.01",
          "": ""
      },
      {
          "Rank": "8",
          "Name": "Wii Play",
          "Platform": "Wii",
          "Year": "2006",
          "Genre": "Misc",
          "Publisher": "Nintendo",
          "Global_Sales": "29.02",
          "": ""
      },
      {
          "Rank": "9",
          "Name": "New Super Mario Bros. Wii",
          "Platform": "Wii",
          "Year": "2009",
          "Genre": "Platform",
          "Publisher": "Nintendo",
          "Global_Sales": "28.62",
          "": ""
      },
      {
          "Rank": "10",
          "Name": "Duck Hunt",
          "Platform": "NES",
          "Year": "1984",
          "Genre": "Shooter",
          "Publisher": "Nintendo",
          "Global_Sales": "28.31",
          "": ""
      },
      {
          "Rank": "11",
          "Name": "Nintendogs",
          "Platform": "DS",
          "Year": "2005",
          "Genre": "Simulation",
          "Publisher": "Nintendo",
          "Global_Sales": "24.76",
          "": ""
      },
      {
          "Rank": "12",
          "Name": "Mario Kart DS",
          "Platform": "DS",
          "Year": "2005",
          "Genre": "Racing",
          "Publisher": "Nintendo",
          "Global_Sales": "23.42",
          "": ""
      },
      {
          "Rank": "13",
          "Name": "Pokemon Gold/Pokemon Silver",
          "Platform": "GB",
          "Year": "1999",
          "Genre": "Role-Playing",
          "Publisher": "Nintendo",
          "Global_Sales": "23.1",
          "": ""
      },
      {
          "Rank": "14",
          "Name": "Wii Fit",
          "Platform": "Wii",
          "Year": "2007",
          "Genre": "Sports",
          "Publisher": "Nintendo",
          "Global_Sales": "22.72",
          "": ""
      },
      {
          "Rank": "15",
          "Name": "Wii Fit Plus",
          "Platform": "Wii",
          "Year": "2009",
          "Genre": "Sports",
          "Publisher": "Nintendo",
          "Global_Sales": "22",
          "": ""
      },
      {
          "Rank": "16",
          "Name": "Kinect Adventures!",
          "Platform": "X360",
          "Year": "2010",
          "Genre": "Misc",
          "Publisher": "Microsoft Game Studios",
          "Global_Sales": "21.82",
          "": ""
      },
      {
          "Rank": "17",
          "Name": "Grand Theft Auto V",
          "Platform": "PS3",
          "Year": "2013",
          "Genre": "Action",
          "Publisher": "Take-Two Interactive",
          "Global_Sales": "21.4",
          "": ""
      },
      {
          "Rank": "18",
          "Name": "Grand Theft Auto: San Andreas",
          "Platform": "PS2",
          "Year": "2004",
          "Genre": "Action",
          "Publisher": "Take-Two Interactive",
          "Global_Sales": "20.81",
          "": ""
      },
      {
          "Rank": "19",
          "Name": "Super Mario World",
          "Platform": "SNES",
          "Year": "1990",
          "Genre": "Platform",
          "Publisher": "Nintendo",
          "Global_Sales": "20.61",
          "": ""
      },
      {
          "Rank": "20",
          "Name": "Brain Age: Train Your Brain in Minutes a Day",
          "Platform": "DS",
          "Year": "2005",
          "Genre": "Misc",
          "Publisher": "Nintendo",
          "Global_Sales": "20.22",
          "": ""
      }
    ]

    // Now store the array values in web local storage
    
    try {
      if(this.myStorage.length === 0)
    {
      for (let index = 0; index < this.topGamesList.length; index++) {
        
        let {Rank,Name,Genre,Global_Sales,Platform,Publisher,Year} = this.topGamesList[index];
    //    console.log(Rank);
       
        this.myStorage.setItem("Rank"+index, Rank);
        this.myStorage.setItem("Name"+index, Name);
        this.myStorage.setItem("Genre"+index, Genre);
        this.myStorage.setItem("Global_Sales"+index, Global_Sales);
        this.myStorage.setItem("Platform"+index, Platform);
        this.myStorage.setItem("Publisher"+index, Publisher);
        this.myStorage.setItem("Year"+index, Year);

     //   let temp:IGames = JSON.parse(element);

      }
      console.log("Populated the local storage for processing");

    }else{
      console.log("Local storage data is available for processing");
    }

    }catch (err)
    {

     console.log("Exception in local storage processing :"+ err);

    }

    this.myStorageList = this.getWebStorageData();
    
  }
  getWebStorageData():[] {

    let output:any = [];

    var gameObject = {
      "Rank" : "",
      "Name" : "",
      "Genre" : "",
      "Global_Sales" : "",
      "Platform" : "",
      "Publisher" : "",
      "Year" : ""
   

    };

    for (let index = 0; index < this.myStorage.length; index++) {

      gameObject.Rank = this.myStorage.getItem('Rank'+index);
      gameObject.Name = this.myStorage.getItem('Name'+index);
      gameObject.Genre = this.myStorage.getItem('Genre'+index);
      gameObject.Global_Sales = this.myStorage.getItem('Global_Sales'+index);
      gameObject.Platform = this.myStorage.getItem('Platform'+index);
      gameObject.Publisher = this.myStorage.getItem('Publisher'+index);
      gameObject.Year = this.myStorage.getItem('Year'+index);
      
      output.push(gameObject);
      
    }

    return output;
   // throw new Error("Method not implemented.");
  }

}
