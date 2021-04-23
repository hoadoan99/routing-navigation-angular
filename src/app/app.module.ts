import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { from } from 'rxjs';
import { GithubFollowerComponent } from './github-follower/github-follower.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowerComponent,
    GithubFollowerComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'followers',
        component:GithubFollowerComponent
      },
      {
        path:'followers/:id/:username',
        component:GithubProfileComponent
      },
      {
        path:'posts',
        component:PostComponent
      },
      {
        path:'**',
        component: NotFoundComponent
      },

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
