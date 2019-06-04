import { Component, OnInit } from '@angular/core';
import { IGames } from './IGames';
import { Gameobject } from './Gameobject';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  
  pageTitle:string = "Top Selling Games";
  userMessage:string = "";
  topGamesList:IGames[] = [];
  myStorageList:IGames[] = [];
  // Collection to store the filtered list data 
  filteredStorageList:IGames[] = [];
  myStorage:any = window.localStorage;

  // To filter , convert list filter into getter and setter property 

  //listFilter:string = "";

  _listFilter:string;

  get listFilter():string{

    return this._listFilter;

  }

  set listFilter(filterText:string){

    this._listFilter = filterText;

    // custom logic to filter, validate if filter text available then filter else populate full 

    this.filteredStorageList = this._listFilter ? this.getFilterData(filterText) : this.myStorageList;

   // console.log(this.filteredStorageList);

  }


  constructor() {

    this._listFilter = "";
   
   }

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

    this.filteredStorageList= this.myStorageList;
   
    
  }
  getWebStorageData():any {

    var output:any = [];

    let tempObject:any;

    // Create a construction function for Game Object 
    

    
    for (let index = 0; index < this.topGamesList.length; index++) {



      output.push(new Gameobject(this.myStorage.getItem('Rank'+index),this.myStorage.getItem('Name'+index),this.myStorage.getItem('Genre'+index),this.myStorage.getItem('Global_Sales'+index),this.myStorage.getItem('Platform'+index),this.myStorage.getItem('Publisher'+index),this.myStorage.getItem('Year'+index)));
      
    }

//    console.log(output);

    return output;
   // throw new Error("Method not implemented.");
  }

   clearData():void{

    this.myStorage.clear();
    this.userMessage = "Storage Cleared!!";

   }

   
  getFilterData(filterText: string): IGames[] {

    // convert the filter text in lowercase for case insensitive match 
    filterText = filterText.toLocaleLowerCase();

    const result = this.myStorageList.filter((item:IGames) => item.Name.toLocaleLowerCase().indexOf(filterText) != -1); 

  //  console.log("result :"+result);

    return result;
    

  //  throw new Error("Method not implemented.");
  }


}
