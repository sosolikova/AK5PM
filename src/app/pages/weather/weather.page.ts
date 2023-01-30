import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
  weatherTemp : any
  todayDate = new Date()
  constructor(public httpClient:HttpClient) {
    this.loadData()
   }

  loadData(){
    this.httpClient.get(`${API_URL}/weather?q=${"Praha"}&appid=${API_KEY}`).subscribe(results =>{
      console.log(results);
      this.weatherTemp = results['main']
      console.log(this.weatherTemp);
    })
  }

  ngOnInit(): void {
  }

}
