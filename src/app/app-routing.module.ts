import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { PageTwoComponent } from './components/pageTwo/page-two/page-two.component';
import { ImageProfileComponent } from './components/imageProfile/image-profile/image-profile.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path : '',
    component : AppComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'pageTwo', 
    component : PageTwoComponent
  },
  {
    path : 'imageProfile',
    component : ImageProfileComponent
  },
  {
    path: '**',
    redirectTo : ''
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
