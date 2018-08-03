import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MusicComponent } from './music/music.component';
import { ComedyComponent } from './comedy/comedy.component';
import { FineArtComponent } from './fine-art/fine-art.component';
import { FoodSpiritsComponent } from './food-spirits/food-spirits.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'music', component: MusicComponent },
  { path: 'comedy', component: ComedyComponent },
  { path: 'fine-art', component: FineArtComponent },
  { path: 'food-spirits', component: FoodSpiritsComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MusicComponent,
    ComedyComponent,
    FineArtComponent,
    FoodSpiritsComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    //  { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
