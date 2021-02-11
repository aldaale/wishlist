import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AloitusComponent } from './aloitus/aloitus.component';
import { FormsModule } from '@angular/forms';
import { PrintComponent } from './print/print.component';
import { WeddingComponent } from './wedding/wedding.component';
import { TulostaComponent } from './tulosta/tulosta.component';
import { BabyshowerComponent } from './babyshower/babyshower.component';
import { PrintBabyShowerComponent } from './print-baby-shower/print-baby-shower.component';
import { SyndetComponent } from './syndet/syndet.component';
import { PrintSyndetComponent } from './print-syndet/print-syndet.component';
// import { TiedotComponent } from './tiedot/tiedot.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    routingComponents,
    AloitusComponent,
    PrintComponent,
    WeddingComponent,
    TulostaComponent,
    BabyshowerComponent,
    PrintBabyShowerComponent,
    SyndetComponent,
    PrintSyndetComponent,
    // TiedotComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // RouterModule.forRoot(routes),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
