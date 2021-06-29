import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {

  
  

  percent=70 
  space=-10 
  radius=100
   outerStrokeWidth=10
  innerStrokeWidth=10 
   outerStrokeColor="'#4882c2'"
    innerStrokeColor="'#e7e8ea'" 
    animation=true
  animationDuration=1000


  constructor() { }

  ngOnInit(): void {
  }

}
