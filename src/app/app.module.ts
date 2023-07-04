import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaComponent } from 'src/app/categoria/categoria.component';
import { TodoComponent } from 'src/app/todo/todo.component';
import { UserRepository } from 'src/repositories/user.repository';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { cadastroComponent } from "./registrar/registrar.component"

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    TodoComponent,
    LoginComponent,
    cadastroComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserRepository,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }