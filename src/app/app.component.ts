import { Component } from '@angular/core';

interface Tarefa{
  id: number
  nome: string

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  nome: string = '';
  tarefas: Tarefa[] = []
  proximoId = 1;

  tarefa={
    nome: ''
  }

  cadastrarTarefa(): void { 
    const novaTarefa: Tarefa = {
      id: this.proximoId,
      nome: this.tarefa.nome
    };
    this.tarefas.push(novaTarefa);
    this.proximoId++;
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }
  

  removerTarefa(id: number): void {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
  
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }
  

  ngOnInit() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      this.tarefas = JSON.parse(tarefasSalvas);
      this.proximoId = this.tarefas[this.tarefas.length - 1].id + 1;
    }
  }

}