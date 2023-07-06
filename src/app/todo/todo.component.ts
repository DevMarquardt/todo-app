import { Component } from "@angular/core";
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';
import { CookieService } from "src/services/cookie.service";


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
  private userId: string = 'diogo.defante';
  private users: User[] = [];
  user!: User;

  constructor(
    private userRepository: UserRepository,
    private cookie: CookieService
  ) {
    userRepository.getUsers().subscribe({
      next: (value) =>{
        console.log(value)
      }
    })
  }

  
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

      removerTarefa(id: number): void {
    let confirmar = confirm("Você tem certeza que deseja remover essa tarefa?");
    if (confirmar) {
      this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
      this.cookie.setCookie('tarefas', JSON.stringify(this.tarefas), 1)
    }
  }

  adicionarTarefa(): void {
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
    this.cookie.setCookie('tarefas', JSON.stringify(this.tarefas), 1)
  }


  //  adicionarTarefa(cadastrarTarefa): void {
  //    if (!this.hasPermission('Add')) {
  //      alert("Você não possui permissão para fazer isso")  
  //      return;
  //    }
  //    cadastrarTarefa();
  //  }

  //  editarTarefa(): void {
  //    if (!this.hasPermission('Edit')) {
  //      alert("Você não possui permissão para fazer isso")  
  //      return;
  //    }
  //    editarTarefa();
  //  }

  //  removeTarefa(removerTarefa): void {
  //    if (!this.hasPermission('Remove')) {
  //      alert("Você não possui permissão para fazer isso")  
  //      return;
  //    }
  //    removerTarefa();
  //  }

  //  hasPermission(permission: string): boolean {
  //    return this.user.cardPermissions.some((cardPermission) => {
  //      return cardPermission === permission;
  //    });
  //  }

  private getUsuarioLogado(): User {
    return this.users.find((user) => {
      return user.id === this.userId
    }) as User;
  }

  ngOnInit() {
    const tarefasSalvas = this.cookie.getCookie('tarefas');
    if (tarefasSalvas) {
      this.tarefas = JSON.parse(tarefasSalvas);
      if (this.tarefas.length > 0) {
        this.proximoId = this.tarefas[this.tarefas.length - 1].id + 1;
      }
    }

    const categoriasSalvas = this.cookie.getCookie('categorias');
    if (categoriasSalvas) {
      this.categorias = JSON.parse(categoriasSalvas);
    }
  }

  localStorage() {
    this.cookie.setCookie('tarefas', JSON.stringify(this.tarefas), 1)
  }

  allowDrop(cate, event: Event){
   event.preventDefault();
   this.tarefaDrop.categoria = cate;
   this.cookie.setCookie('tarefas', JSON.stringify(this.tarefas), 1)
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