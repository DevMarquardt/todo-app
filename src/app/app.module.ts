import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaComponent } from 'src/app/categoria/categoria.component';
import { TodoComponent } from 'src/app/todo/todo.component';
import { UserRepository } from 'src/repositories/user.repository';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserRepository,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }