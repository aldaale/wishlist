import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../user';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {

  clicks = 0;
  kysymykset = ['Name of the couple', 'The Wedding Date', 'Something we want :', 'Something we need :', 'Something for the honeymoon :', 'Something for the future :', 'Something to do :', 'Something special :'];
  kysymys = this.kysymykset[0];

  constructor(@Inject(AppComponent) public parent: AppComponent) { }

  ngOnInit(): void {
  }

  uusiKysymys() {
    this.clicks++;
    if (this.clicks === 1) {
      this.kysymys = this.kysymykset[1];
      this.parent.vastaukset.push(this.parent.vastaus);
      this.parent.vastaus = '';
    } else if (this.clicks === 2) {
      this.kysymys = this.kysymykset[2];
      this.parent.vastaukset.push(this.parent.vastaus);
      this.parent.vastaus = '';
    } else if (this.clicks === 3) {
      this.kysymys = this.kysymykset[3];
      this.parent.vastaukset.push(this.parent.vastaus);
      this.parent.vastaus = '';
    } else if (this.clicks === 4) {
      this.kysymys = this.kysymykset[4];
      this.parent.vastaukset.push(this.parent.vastaus);
      this.parent.vastaus = '';
    } else if (this.clicks === 5) {
      this.kysymys = this.kysymykset[5];
      this.parent.vastaukset.push(this.parent.vastaus);
      this.parent.vastaus = '';
    } else if (this.clicks === 6) {
      this.kysymys = this.kysymykset[6];
      this.parent.vastaukset.push(this.parent.vastaus);
      console.log(this.parent.vastaukset);
      this.parent.vastaus = '';
    } else if (this.clicks === 7) {
      this.kysymys = this.kysymykset[7];
      this.parent.vastaukset.push(this.parent.vastaus);
      console.log(this.parent.vastaukset);
      this.parent.vastaus = '';
    } else if (this.clicks === 8) {
      this.kysymys = this.kysymykset[8];
      this.parent.vastaukset.push(this.parent.vastaus);
      console.log(this.parent.vastaukset);
      this.parent.vastaus = '';
    }
  }

  vastausYksi(_event: Event) {
    this.parent.vastaus = (<HTMLInputElement>_event.target).value;
  }

}
