import { Component, OnInit } from '@angular/core';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
})
export class FarmerComponent implements OnInit {
  farmers: any[] = [];
  constructor(private farmService: FarmService) { }

  ngOnInit() {
    this.farmService.getFarmers('', 1, 10, '', 'DESC').subscribe((data: any) => {
      console.log('data : ', data);
    this.farmers = data.slice(0,10);
    });
  }

}
