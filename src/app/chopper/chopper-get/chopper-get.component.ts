import { Component, OnInit } from '@angular/core';
import Chopper from '../../Chopper';
import { ChopperService } from '../../chopper.service';


@Component({
  selector: 'app-chopper-get',
  templateUrl: './chopper-get.component.html',
  styleUrls: ['./chopper-get.component.scss']
})
export class ChopperGetComponent implements OnInit {

  chopperes: Chopper[];

  constructor(private cs: ChopperService) { }

  ngOnInit() {
    this.getChopperes();
  }

  getChopperes():void{
    this.cs
    .getChopperes()
    .subscribe((data: Chopper[]) => {
    this.chopperes = data;
    });
  }
  deleteChopper(id) {
    this.cs.deleteChopper(id).subscribe(res => {
      console.log('Deleted');
      this.getChopperes();
    });
  }

}
