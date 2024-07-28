import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
carList:any[]=[];
constructor(private carServiceService:CarServiceService,private router: Router){}
ngOnInit() {
this.getAllCars();
}

getAllCars(){
this.carServiceService.getAllCars().subscribe((res:any)=>{
  this.carList=res.slice(0, 3);
  console.log(this.carList);
 
  
})
}
navigate(){
this.router.navigate(['./cars'])
}
}
