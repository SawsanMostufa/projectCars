import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent  implements OnInit {
  carList:any[]=[];
  constructor(private carServiceService:CarServiceService,private router: Router){}
  ngOnInit() {
  this.getAllCars();
  }
  
  getAllCars(){
  this.carServiceService.getAllCars().subscribe((res:any)=>{
    this.carList=res;
    console.log(this.carList);
   
    
  })
  }
  navigate(id:number){
    this.router.navigate([`./carDetails/${id}`])
  }
}
