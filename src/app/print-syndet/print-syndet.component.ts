import { Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-print-syndet',
  templateUrl: './print-syndet.component.html',
  styleUrls: ['./print-syndet.component.css']
})
export class PrintSyndetComponent implements OnInit {

  constructor(@Inject(AppComponent) public parent: AppComponent) { }

  ngOnInit(): void {
  }

}
