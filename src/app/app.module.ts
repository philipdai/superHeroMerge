import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroMergingListComponent } from './hero-merging-list/hero-merging-list.component';
import { MergedHeroComponent } from './merged-hero/merged-hero.component';
import { ServicesModule } from './services/services.module';
import { DetailModalComponent } from './detail-modal/detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroListComponent,
    HeroMergingListComponent,
    MergedHeroComponent,
    DetailModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    ServicesModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
