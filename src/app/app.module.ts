import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared/shared.module';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { PageTwoComponent } from './components/pageTwo/page-two/page-two.component';
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageTwoComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
