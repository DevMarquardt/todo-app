import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  private users: User[] = [];
  user!: User;

  constructor(
    private userRepository: UserRepository
  ) {
    userRepository.getUsers().subscribe({
      next: (value) => {
        this.users = value
        console.log(this.users)
      }
    })
  }

  id: string
  password: string

  logar(): void {
    this.users.forEach(element => {
      if (element.id === this.id && element.password === this.password) {
        window.location.replace('http://localhost:4200/todo')

      }
    }
    )
  }
}