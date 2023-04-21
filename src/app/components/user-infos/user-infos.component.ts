import { Component, Input } from "@angular/core";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-user-infos",
  templateUrl: "./user-infos.component.html",
  styleUrls: ["./user-infos.component.scss"],
})
export class UserInfosComponent {
  xpBarWidth: string = "";
  @Input() loggedUser: User | null = null;
  @Input() userLevelInfos: {
    currentLvl: number;
    xpToNextLvl: number;
    remainingXp: number;
    xpFromCurrentToNextLevel: number;
  } | null = null;
  constructor(public userService: UserService) {}

  getXpBarWidth(): string {
    if (this.userLevelInfos && this.loggedUser) {
      let currentLvlXp =
        this.userLevelInfos.xpFromCurrentToNextLevel -
        this.userLevelInfos.remainingXp;
      this.xpBarWidth =
        Math.floor(
          (currentLvlXp * 100) / this.userLevelInfos.xpFromCurrentToNextLevel
        ) + "%";
    }

    return this.xpBarWidth;
  }
}
