import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoAddComponent } from './components/video-add/video-add.component';
import { AuthGuard } from './services/auth.guard';
import { VideoEditComponent } from './components/video-edit/video-edit.component';
import { VideoDetalisComponent } from './components/video-detalis/video-detalis.component';

const routes: Routes = [
  {
	  path: '',
	  component: HomeComponent,
  },
  {
	  path: 'videos',
	  component: VideosComponent,
  },
  {
	  path: 'videos/details/:id',
	  component: VideoDetalisComponent,
  },
  {
	  path: 'videos/add',
	  component: VideoAddComponent,
    canActivate: [AuthGuard],
  },
  {
	  path: 'videos/edit/:id',
	  component: VideoEditComponent,
    canActivate: [AuthGuard],
  },
  {
	  path: 'login',
	  component: LoginComponent,
  },
  {
	  path: 'signup',
	  component: SignupComponent,
  },
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
