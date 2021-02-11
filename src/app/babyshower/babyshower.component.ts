import { Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-babyshower',
  templateUrl: './babyshower.component.html',
  styleUrls: ['./babyshower.component.css']
})
export class BabyshowerComponent implements OnInit {
  clicks = 0;
  kysymykset = ['Name:', 'Due date', 'Something for the baby to wear:', 'Essentials for the baby:','Books for mum and baby:','Something mom needs:','Treats for mom:', 'Other gift wishes'];
  kysymys = this.kysymykset[0];


  constructor(@Inject(AppComponent) public parent: AppComponent) { }

  ngOnInit(): void {
  }

  uusiKysymys() {
    this.clicks++;
    if (this.clicks === 1) {
      this.kysymys = this.kysymykset[1];
      this.parent.babyvastaukset.push(this.parent.babyvastaus);
      this.parent.babyvastaus = '';
    } else if (this.clicks === 2) {
      this.kysymys = this.kysymykset[2];
      this.parent.babyvastaukset.push(this.parent.babyvastaus);
      this.parent.babyvastaus = '';
    } else if (this.clicks === 3) {
      this.kysymys = this.kysymykset[3];
      this.parent.babyvastaukset.push(this.parent.babyvastaus);
      this.parent.babyvastaus = '';
    } else if (this.clicks === 4) {
      this.kysymys = this.kysymykset[4];
      this.parent.babyvastaukset.push(this.parent.babyvastaus);
      this.parent.babyvastaus = '';
    } else if (this.clicks === 5) {
      this.kysymys = this.kysymykset[5];
      this.parent.babyvastaukset.push(this.parent.babyvastaus);
      this.parent.babyvastaus = '';
    } else if (this.clicks === 6) {
      this.kysymys = this.kysymykset[6];
      this.parent.babyvastaukset.push(this.parent.babyvastaus);
      console.log(this.parent.babyvastaukset);
      this.parent.babyvastaus = '';
    } else if (this.clicks === 7) {
      this.kysymys = this.kysymykset[7];
      this.parent.babyvastaukset.push(this.parent.babyvastaus);
      console.log(this.parent.babyvastaukset);
      this.parent.babyvastaus = '';
    } else if (this.clicks === 8) {
      this.kysymys = this.kysymykset[8];
      this.parent.babyvastaukset.push(this.parent.babyvastaus);
      console.log(this.parent.babyvastaukset);
      this.parent.babyvastaus = '';
    } else if (this.clicks === 9) {
      this.kysymys = this.kysymykset[9];
      this.parent.babyvastaukset.push(this.parent.babyvastaus);
      console.log(this.parent.babyvastaukset);
      this.parent.babyvastaus = '';
    }
}
      vastausYksi(_event: Event) {
        this.parent.babyvastaus = (<HTMLInputElement>_event.target).value;
      }

}
