import { Component } from "@angular/core";

interface Categoria {
  nome: string
}

@Component({
  templateUrl: 'categoria.component.html',
})
export class CategoriaComponent {
  title = 'todo-app';
  categorias: Categoria[] = []
  categoria = {
    nome: '',
  }

  cadastrarCategoria(): void {
    if (!this.categoria.nome) {
      return;
    }
    const novaCategoria: Categoria = {
      nome: this.categoria.nome,
    };
    this.categorias.push(novaCategoria);
    console.log(this.categorias)
    this.categoria.nome = '';
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }
  
}