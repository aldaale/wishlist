import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tulosta',
  templateUrl: './tulosta.component.html',
  styleUrls: ['./tulosta.component.css']
})
export class TulostaComponent implements OnInit {

  constructor(@Inject(AppComponent) public parent: AppComponent) { }

  ngOnInit(): void {
  }

}
