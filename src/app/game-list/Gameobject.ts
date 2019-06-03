export class Gameobject{

    Rank:string;
    Name:string;
    Genre:string;
    Global_Sales:string;
    Platform:string;
    Publisher:string;
    Year:string;

    constructor(Rank:string,Name:string,Genre:string,Global_Sales:string,Platform:string,Publisher:string,Year:string)
    {
      this.Rank = Rank;
      this.Name = Name;
      this.Genre = Genre;
      this.Global_Sales = Global_Sales;
      this.Platform = Platform;
      this.Publisher = Publisher;
      this.Year = Year;

    }

}