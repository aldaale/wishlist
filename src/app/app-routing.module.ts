import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import { RouterModule, Routes } from '@angular/router';
import { TiedotComponent } from './tiedot/tiedot.component';
import { AloitusComponent } from './aloitus/aloitus.component';
import { PrintComponent } from './print/print.component';
import { BabyshowerComponent } from './babyshower/babyshower.component';
import { PrintBabyShowerComponent } from './print-baby-shower/print-baby-shower.component';
import { WeddingComponent } from './wedding/wedding.component';
import { TulostaComponent } from './tulosta/tulosta.component';
import { SyndetComponent } from './syndet/syndet.component';
import { PrintSyndetComponent } from './print-syndet/print-syndet.component';

const routes: Routes = [
  {path: '', redirectTo: '/aloitus', pathMatch: 'full' },
  { path: 'tiedot', component: TiedotComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'aloitus', component: AloitusComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: 'tulosta', component: TulostaComponent },
  {path: 'print', component: PrintComponent},
  {path: 'syndet', component: SyndetComponent},
  {path: 'print', component: PrintComponent},
  {path: 'babyshower', component: BabyshowerComponent},
  {path: 'babyprint', component: PrintBabyShowerComponent},
  {path: 'printSynde', component: PrintSyndetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TiedotComponent, QuestionsComponent, AloitusComponent, PrintComponent, SyndetComponent, PrintSyndetComponent,  BabyshowerComponent, PrintBabyShowerComponent ]
