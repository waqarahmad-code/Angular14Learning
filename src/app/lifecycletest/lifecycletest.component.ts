import { AfterViewInit, Input, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent implements OnInit, OnChanges, OnDestroy
, DoCheck, AfterViewInit
{

  @Input()
  title:String="";

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("On changes")
   console.log(changes);
  }
  ngOnDestroy(): void {
    console.log("On Destroy")
  }
  ngDoCheck(): void {
    console.log("Do check")
  }
  ngAfterViewInit(): void {
    console.log("After View Init")
  }

  ngOnInit(): void {
    console.log("On Init")
  }


}
