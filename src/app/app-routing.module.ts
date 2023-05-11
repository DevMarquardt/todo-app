import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/app/categoria/categoria.component";
import { TodoComponent } from "src/app/todo/todo.component";

const rotas:Route[] = [
    {
        path: 'categoria',
        component: CategoriaComponent
    },
    {
        path: 'todo',
        component: TodoComponent
    },
]
@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}