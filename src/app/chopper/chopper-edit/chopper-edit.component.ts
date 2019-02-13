import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ChopperService } from '../../chopper.service';

@Component({
  selector: 'app-chopper-edit',
  templateUrl: './chopper-edit.component.html',
  styleUrls: ['./chopper-edit.component.scss']
})
export class ChopperEditComponent implements OnInit {

  chopper: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private cs: ChopperService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        chopper_name: ['', Validators.required ],
        chopper_brand: ['', Validators.required ],
        chopper_place: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.cs.editChopper(params['id']).subscribe(res => {
          this.chopper = res;
      });
    });
  }

  updateChopper(chopper_name, chopper_brand, chopper_place) {
    this.route.params.subscribe(params => {
       this.cs.updateChopper(chopper_name, chopper_brand, chopper_place, params['id']).subscribe((data: string) => {
        console.log(data);
        this.router.navigate(['chopper']);
       });
    });
  }
}