import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gpr',
  templateUrl: './gpr.component.html',
  styleUrls: ['./gpr.component.css']
})
export class GprComponent implements OnInit {

  about = "../../assets/images/gpr/sensor-0.jpeg";
  imagesarray= [
        [ "../../assets/images/gpr/sensor-1.jpeg",
          "../../assets/images/gpr/sensor-2.jpeg",
          "../../assets/images/gpr/sensor-3.jpeg"
        ],
        [ "../../assets/images/gpr/sensor-4.jpeg",
          "../../assets/images/gpr/sensor-5.jpeg",
          "../../assets/images/gpr/sensor-6.jpeg"
        ],
        [ "../../assets/images/gpr/sensor-7.jpeg",
          "../../assets/images/gpr/sensor-8.jpeg",
          "../../assets/images/gpr/sensor-9.jpeg"
        ]
    ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackToHomePage(): void{
      this.router.navigate(['/home']);
  }
}
