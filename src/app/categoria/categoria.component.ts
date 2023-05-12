import { Component } from "@angular/core";

interface Categoria {
  idcate: number
  nome: string
}

@Component({
  templateUrl: 'categoria.component.html',
})
export class CategoriaComponent {
  title = 'todo-app';
  categorias: Categoria[] = []
  proximoId = 1;
  categoria = {
    nome: '',
  }

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
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }
  
  removerCategoria(idcate: number): void {
    let confirmar = confirm("Você tem certeza que deseja remover essa categoria?")
    if(confirmar){
      this.categorias = this.categorias.filter(categoria => categoria.idcate !== idcate);

      localStorage.setItem('categorias', JSON.stringify(this.categorias));
    }
      else{
    }
  }

  ngOnInit() {
    const categoriasSalvas = localStorage.getItem('categorias');
    if (categoriasSalvas) {
      this.categorias = JSON.parse(categoriasSalvas);
      this.proximoId = this.categorias[this.categorias.length - 1].idcate+ 1;
    }
  }

  localStorage(){
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }
}