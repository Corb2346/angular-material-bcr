import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared/shared.module';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { PageTwoComponent } from './components/pageTwo/page-two/page-two.component';
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './components/dialog/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageTwoComponent,
    NotFoundComponent,
    DialogComponent,
  ],
  entryComponents :[ DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
