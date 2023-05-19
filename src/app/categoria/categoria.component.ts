import { Component } from "@angular/core";

interface Categoria {
  idcate: number;
  nome: string;
}
interface Tarefa {
  id: number;
  nome: string;
  categoria: string;
}

@Component({
  templateUrl: 'categoria.component.html',
})
export class CategoriaComponent {
  title = 'todo-app';
  categorias: Categoria[] = [];
  proximoId = 1;
  categoria = {
    nome: '',
    
  };
  tarefas: Tarefa[] = [];

  tarefa = {
    nome: '',
    categoria: ''
  };

  cadastrarCategoria(): void {
    if (!this.categoria.nome) {
      return;
    }
    const novaCategoria: Categoria = {
      nome: this.categoria.nome,
      idcate: this.proximoId,
    };
    this.categorias.push(novaCategoria);
    this.proximoId++;
    this.categoria.nome = '';
    this.localStorage();
  }

  removerCategoria(idcate: number, id: number): void {
    let confirmar = confirm("Você tem certeza que deseja remover essa categoria?")
    if (confirmar) {
      this.categorias = this.categorias.filter(categoria => categoria.idcate !== idcate);
      this.localStorage();
      this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
      localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }
  }

  ngOnInit() {
    const categoriasSalvas = localStorage.getItem('categorias');
    if (categoriasSalvas) {
      this.categorias = JSON.parse(categoriasSalvas);
      if (this.categorias.length > 0) {
        this.proximoId = this.categorias[this.categorias.length - 1].idcate + 1;
      }
    }
  }
  

  localStorage() {
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }
}
