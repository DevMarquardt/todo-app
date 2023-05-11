import { Component } from '@angular/core';

interface Tarefa {
  id: number
  nome: string
  categoria: string

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
