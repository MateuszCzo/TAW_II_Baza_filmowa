import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoDetalisComponent } from './components/video-detalis/video-detalis.component';
import { VideoAddComponent } from './components/video-add/video-add.component';
import { VideoEditComponent } from './components/video-edit/video-edit.component';
import { BigLettersPipe } from './pipes/big-letters.pipe';
import { TextFormatDirective } from './directives/text-format.directive';
import { DataService } from './services/data.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    VideosComponent,
    VideoDetalisComponent,
    VideoAddComponent,
    VideoEditComponent,
    BigLettersPipe,
    TextFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService, 
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
