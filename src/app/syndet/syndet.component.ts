import { Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-syndet',
  templateUrl: './syndet.component.html',
  styleUrls: ['./syndet.component.css']
})
export class SyndetComponent implements OnInit {
  clicks = 0;
  kysymykset = ['Places to eat:', 'Places to shop:', 'Giftcards', 'Bath & Body Works Scents:', 'Candy/Snacks:', 'Cookies/Cake:', 'Hobbies/Collectibles:', 'Flowers:', 'Other Wish List Items:'];
  kysymys = this.kysymykset[0];

  constructor(@Inject(AppComponent) public parent: AppComponent) { }

  ngOnInit(): void {
  }

  syndetKysymys() {
    this.clicks++;
    if (this.clicks === 1) {
      this.kysymys = this.kysymykset[1];
      this.parent.syndeVastaukset.push(this.parent.syndeVastaus);
      this.parent.syndeVastaus = '';
    } else if (this.clicks === 2) {
      this.kysymys = this.kysymykset[2];
      this.parent.syndeVastaukset.push(this.parent.syndeVastaus);
      this.parent.syndeVastaus = '';
    } else if (this.clicks === 3) {
      this.kysymys = this.kysymykset[3];
      this.parent.syndeVastaukset.push(this.parent.syndeVastaus);
      this.parent.syndeVastaus = '';
    } else if (this.clicks === 4) {
      this.kysymys = this.kysymykset[4];
      this.parent.syndeVastaukset.push(this.parent.syndeVastaus);
      this.parent.syndeVastaus = '';
    } else if (this.clicks === 5) {
      this.kysymys = this.kysymykset[5];
      this.parent.syndeVastaukset.push(this.parent.syndeVastaus);
      this.parent.syndeVastaus = '';
    } else if (this.clicks === 6) {
      this.kysymys = this.kysymykset[6];
      this.parent.syndeVastaukset.push(this.parent.syndeVastaus);
      this.parent.syndeVastaus = '';
    } else if (this.clicks === 7) {
      this.kysymys = this.kysymykset[7];
      this.parent.syndeVastaukset.push(this.parent.syndeVastaus);
      this.parent.syndeVastaus = '';
    } else if (this.clicks === 8) {
      this.kysymys = this.kysymykset[8];
      this.parent.syndeVastaukset.push(this.parent.syndeVastaus);
      this.parent.syndeVastaus = '';
    } else if (this.clicks === 9) {
      this.kysymys = this.kysymykset[9];
      this.parent.syndeVastaukset.push(this.parent.syndeVastaus);
      this.parent.syndeVastaus = '';
    }
  }

  syndeVastaus(_event: Event) {
    this.parent.syndeVastaus = (<HTMLInputElement>_event.target).value;
  }


}
