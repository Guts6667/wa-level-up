import { Component, Input } from "@angular/core";
import { Settings } from "src/app/interfaces/settings";
import { User } from "src/app/interfaces/user";
import { SettingsService } from "src/app/services/settings.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Input() title: string = "";
  @Input() loggedUser: User | null = null;
  userLevelInfos: {
    currentLvl: number;
    xpToNextLvl: number;
    remainingXp: number;
    xpFromCurrentToNextLevel: number;
  } | null = null;
  settings: Settings = {
    xpFirstLevel: 0,
    xpRatioByLevel: 0,
    maxLevel: 0,
  };

  constructor(
    public userService: UserService,
    public settingsService: SettingsService
  ) {
    this.settingsService.getSettings().subscribe();
  }

  ngOnInit() {
    if (this.loggedUser && this.settingsService) {
      this.userLevelInfos = this.settingsService.getUserLevel(this.loggedUser);
      console.log(this.userLevelInfos);
    }
  }
}
