import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirebaseModuleModule } from './firebase-module/firebase-module.module';
import { PostsComponent } from './posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModuleModule,
    BrowserAnimationsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
