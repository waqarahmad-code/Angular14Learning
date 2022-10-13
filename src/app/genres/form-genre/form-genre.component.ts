import { Component, EventEmitter, OnInit,Output,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private router:Router, private formBuilder:FormBuilder) { }


  @Input()
  model!: genreCreationDTO;

  @Output()
  OnSaveChanges:EventEmitter<genreCreationDTO>=new EventEmitter<genreCreationDTO>();

  form!: FormGroup;


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3),firstLetterUppercase()]
      }]
    });

    if(this.model!==undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.OnSaveChanges.emit(this.form.value);
    // this.router.navigate(['/genres']);
  }

  getErrorMessageFieldName(){
    const field= this.form.get("name");
    if(field?.hasError('required')){
      return "The name field is requried";
    }
    if(field?.hasError('minlength')){
      return "The minimum lenght is 3";
    }
    if(field?.hasError('firstLetterUppercase')){
      return field.getError("firstLetterUppercase").message;
    }

    return '';
  }

}