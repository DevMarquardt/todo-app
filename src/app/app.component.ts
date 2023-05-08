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
  title = 'todo-app';
  nome: string = '';
  tarefas: Tarefa[] = []
  proximoId = 1;

  tarefa = {
    nome: '',
    categoria: ''
  }

  cadastrarTarefa(): void {
    if (!this.tarefa.nome) {

      return;
    }
    const novaTarefa: Tarefa = {
      id: this.proximoId,
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria
    };
    this.tarefas.push(novaTarefa);
    this.proximoId++;
    console.log(this.tarefas)
    this.tarefa.nome = null
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }


  removerTarefa(id: number): void {
    let confirmar = confirm("Você tem certeza que deseja remover essa tarefa?")
    if(confirmar){
      this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);

      localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }
      else{
    }
  }
  
  ngOnInit() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      this.tarefas = JSON.parse(tarefasSalvas);
      this.proximoId = this.tarefas[this.tarefas.length - 1].id + 1;
    }
  }

  localStorage(){
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

}