import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    change(event){
    if (event.target.files.lenght > 0) {
      const file: File = event.target.files[0];
    }
  }
}
