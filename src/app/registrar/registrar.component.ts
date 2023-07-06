import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";

@Component({
    templateUrl: 'registrar.component.html',
    styleUrls: ['registrar.component.css']
})

export class CadastroComponent {

    private users: User[] = [];
    user!: User;
    private userRepository: UserRepository
    constructor(private http: HttpClient, userRepository: UserRepository) {
        userRepository.getUsers().subscribe({
            next: (value) => {
                this.users = value
            },
        })
    }

    nome: string
    id: string
    email: string
    password: string

    cadastro(): void {
        let verificaUser: boolean = true
        const user: User = {

            nome: this.nome,
            id: this.id,
            email: this.email,
            password: this.password
        }

        this.users.forEach(element => {
            if (element.id === this.id) {
                alert('User ja cadastrado')
                verificaUser = false
            }
        });

        if (verificaUser === true) {
            alert("Cadastrado com sucesso")
            this.http.post<User[]>('http://localhost:4300/users', user).subscribe((req) => { })
            console.log(user)
            window.location.replace('http://localhost:4200/login')
        }

        this.nome = ''
        this.id = ''
        this.email = ''
        this.password = ''

    }
}