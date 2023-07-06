import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/app/categoria/categoria.component";
import { TodoComponent } from "src/app/todo/todo.component";
import { AuthGuardService } from "src/services/auth-guard.service";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./registrar/registrar.component"

const rotas:Route[] = [
    {
        path: 'categoria',
        component: CategoriaComponent
    },
    {
        path: 'todo',
        component: TodoComponent,
        canActivate: [AuthGuardService]
    },

    {
        path: 'login',
        component: LoginComponent

    },
    
    {
        path: 'registrar',
        component: CadastroComponent

    },
    {
        path:'',
        redirectTo:'todo',
        pathMatch:'full'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}