//import modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';

//import components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { UserListComponent } from './components/chatroom/user-list/user-list.component';
import { ChatFeedComponent } from './components/chatroom/chat-feed/chat-feed.component';
import { ChatMessageComponent } from './components/chatroom/chat-message/chat-message.component';
import { ChatFormComponent } from './components/chatroom/chat-form/chat-form.component';

//import services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard'
import { JwtHelperService } from '@auth0/angular-jwt';
import { ChatService } from './services/chat.service';


//  Create route map for moving around the url
//  Routes protected by AuthGuard will reroute to login when not logged in
const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'chatroom', component: ChatroomComponent, canActivate:[AuthGuard]},
]

/*
    declarations: components,
    imports: modules,
    providers: services,
    bootstrap: Init component
*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ChatroomComponent,
    UserListComponent,
    ChatFeedComponent,
    ChatMessageComponent,
    ChatFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
      ValidateService,
      AuthService,
      JwtHelperService,
      AuthGuard,
      ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
