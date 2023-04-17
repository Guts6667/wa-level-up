import { Component } from "@angular/core";
import { UserService } from "./services/user.service";
import { User } from "./interfaces/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "level-up";

  constructor(private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  get loggedUser() : User | null{
    return this.userService.loggedUser
  }
}
