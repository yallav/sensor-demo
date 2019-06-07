import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  images = [
    "../assets/images/main/smart-sensors.jpeg",
    "../assets/images/main/gpr-sensor.jpeg",
    "../assets/images/main/iot.jpg",
    "../assets/images/main/iot-2.jpeg"
  ]
  
  ngOnInit() {
  }

}
