import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaComponent } from 'src/app/categoria/categoria.component';
import { TodoComponent } from 'src/app/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }