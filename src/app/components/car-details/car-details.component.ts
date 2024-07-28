import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  carDetails!: any;
  id!: any;
  constructor(
    private carServiceService: CarServiceService,
    private router: Router,
    private activateRout: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.activateRout.snapshot.params['id'];
    this.getCarById(this.id);
  }

  getCarById(id: number) {
    this.carServiceService.getCarById(id).subscribe((res: any) => {
      this.carDetails = res;
      console.log(this.carDetails);
    });
  }
}
