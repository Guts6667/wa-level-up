import { Component } from "@angular/core";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  title = "Learning Pipes & Observables";
  myUser: User | null = null;
  errorMsg: boolean = false;
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      console.log(users);
    });
  }

  logMyUser(userName: string, event: Event): void {
    event.preventDefault();
    this.userService.findUser(userName).subscribe(
      (user: User | null) => {
        this.myUser = user;
        if (this.myUser && this.myUser !== null) {
          console.log(`User: ${this.myUser.name} connected successfully`);
          this.userService.login();
          this.userService.loggedUser = this.myUser;
          this.router.navigate([`/home`, this.myUser.name]);
        } else {
          this.errorMsg = true;
          console.error(`Couldn't find ${userName}`);
        }
      },
      (error) => {
        this.errorMsg = true;
        console.error(`Couldn't find ${userName} :${error}`);
      }
    );
  }
}
