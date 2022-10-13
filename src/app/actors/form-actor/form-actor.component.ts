import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }



  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      dateOfBirth: ''
      // picture: '',
      // biography: ''
    });
  }

}
