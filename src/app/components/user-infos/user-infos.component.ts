import { Component, Input } from "@angular/core";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-infos",
  templateUrl: "./user-infos.component.html",
  styleUrls: ["./user-infos.component.scss"],
})
export class UserInfosComponent {
  @Input() loggedUser: User | null = null;
  constructor(public userService: UserService) {}
}
