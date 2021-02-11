import { Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../user';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  //vastaus = '';
  clicks = 0;
  kysymykset = ['Something I want :', 'Something I need :', 'Something to wear :', 'Something to read :', 'Something to do :', 'Something for my family :'];
  kysymys = this.kysymykset[0];
  //vastaukset = [];

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
    }
  }

  vastausYksi(_event: Event) {
    this.parent.vastaus = (<HTMLInputElement>_event.target).value;
  }

}