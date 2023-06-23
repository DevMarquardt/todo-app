import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/app/categoria/categoria.component";
import { TodoComponent } from "src/app/todo/todo.component";
import { AuthGuardService } from "src/services/auth-guard.service";

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