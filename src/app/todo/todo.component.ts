import { Component } from "@angular/core";

interface Tarefa {
  id: number;
  nome: string;
  categoria: string;
}

interface Categoria {
  idcate: number;
  nome: string;
}

@Component({
  templateUrl: 'todo.component.html'
})
export class TodoComponent {
  title = 'todo-app';
  tarefas: Tarefa[] = [];
  categorias: Categoria[] = [];
  proximoId = 1;

    categoriaDrop : Categoria
    tarefaDrop: Tarefa
    indexDrop: number;

  tarefa = {
    nome: '',
    categoria: ''
  };

  cadastrarTarefa(): void {
    if (!this.tarefa.categoria || !this.tarefa.nome) {
      return;
    }
    const novaTarefa: Tarefa = {
      id: this.proximoId,
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria
    };
    this.tarefas.push(novaTarefa);
    this.proximoId++;
    this.tarefa.nome = '';
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

  removerTarefa(id: number): void {
    let confirmar = confirm("Você tem certeza que deseja remover essa tarefa?");
    if (confirmar) {
      this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
      localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }
  }

  ngOnInit() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      this.tarefas = JSON.parse(tarefasSalvas);
      if (this.tarefas.length > 0) {
        this.proximoId = this.tarefas[this.tarefas.length - 1].id + 1;
      }
    }

    const categoriasSalvas = localStorage.getItem('categorias');
    if (categoriasSalvas) {
      this.categorias = JSON.parse(categoriasSalvas);
    }
  }

  localStorage() {
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

  allowDrop(cate, event: Event){
   event.preventDefault();
   this.tarefaDrop.categoria = cate;
   localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

  drag(cate){
   this.tarefaDrop = cate;
  }

  dropEvent(event : Event, index : number) : void{
    event.preventDefault();
    this.indexDrop = index;
  }
  
  drop(event : Event): void{
    this.tarefas.splice(this.tarefas.indexOf(this.tarefaDrop), 1);
    this.tarefas.splice(this.indexDrop, 0, this.tarefaDrop);
  }
}
