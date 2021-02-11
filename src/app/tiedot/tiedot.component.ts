import { Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../user';

@Component({
  selector: 'app-tiedot',
  templateUrl: './tiedot.component.html',
  styleUrls: ['./tiedot.component.css']
})
export class TiedotComponent implements OnInit {

  //nimi = '';
  //ika = '';

  constructor(@Inject(AppComponent) public parent: AppComponent) { }

  ngOnInit(): void {
  }

  lisaaNimi(_event: Event) {
    this.parent.nimi = (<HTMLInputElement>_event.target).value;
  }
  
  lisaaIka(_event: Event) {
    this.parent.ika = (<HTMLInputElement>_event.target).value;
  }

  naytaTiedot() {
    console.log(this.parent.nimi + ' + ' + this.parent.ika);
  }

  userModel = new User('', '');

}
