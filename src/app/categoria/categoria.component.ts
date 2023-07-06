import { Component } from "@angular/core";
import { CookieService } from "src/services/cookie.service";

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
  styleUrls: ['categoria.component.css'] 
})
export class CategoriaComponent {
  constructor(
    private cookie: CookieService
  ) {

  }
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
    this.cookiee();
  }

  removerCategoria(idcate: number, id: number): void {
    let confirmar = confirm("Você tem certeza que deseja remover essa categoria?")
    if (confirmar) {
      this.categorias = this.categorias.filter(categoria => categoria.idcate !== idcate);
      this.cookiee();
      this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
      this.cookie.setCookie('categorias', JSON.stringify(this.categorias), 1)
    }
  }

  ngOnInit() {
    const categoriasSalvas = this.cookie.getCookie('categorias');
    if (categoriasSalvas) {
      this.categorias = JSON.parse(categoriasSalvas);
      if (this.categorias.length > 0) {
        this.proximoId = this.categorias[this.categorias.length - 1].idcate + 1;
      }
    }
  }


  cookiee() {
    this.cookie.setCookie('categorias', JSON.stringify(this.categorias), 1)
  }
}
