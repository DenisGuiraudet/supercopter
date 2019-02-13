import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ChopperService } from '../../chopper.service';


@Component({
  selector: 'app-chopper-add',
  templateUrl: './chopper-add.component.html',
  styleUrls: ['./chopper-add.component.scss']
})
export class ChopperAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private cs: ChopperService, private router: Router,) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      chopper_name: ['', Validators.required ],
      chopper_brand: ['', Validators.required ],
      chopper_place: ['', Validators.required ]
    });
  }

  addChopper(chopper_name, busines_name, chopper_place) {
    this.cs.addChopper(chopper_name, busines_name, chopper_place);
    this.router.navigate(['chopper']);
  }

  ngOnInit() {
  }

}
