import { Component } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/interfaces/user";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  currentUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.loggedUser;
    if (this.currentUser) {
      console.log(this.currentUser);
    }
  }
}
