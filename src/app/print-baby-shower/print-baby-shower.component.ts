import { Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-print-baby-shower',
  templateUrl: './print-baby-shower.component.html',
  styleUrls: ['./print-baby-shower.component.css']
})
export class PrintBabyShowerComponent implements OnInit {

  constructor(@Inject(AppComponent) public parent: AppComponent) { }

  ngOnInit(): void {
  }

}
