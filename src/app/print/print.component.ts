import { Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor(@Inject(AppComponent) public parent: AppComponent) { }

  ngOnInit(): void {
  }
  

}
