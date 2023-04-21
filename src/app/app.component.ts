import { Component } from "@angular/core";
import { UserService } from "./services/user.service";
import { SettingsService } from "./services/settings.service";
import { User } from "./interfaces/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "level-up";

  constructor(
    private userService: UserService,
    private settingsService: SettingsService
  ) {
    this.settingsService.getSettings().subscribe();
  }

  /**
   * Check if the user is logged in
   */
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  /**
   * Retrieves the logged user datas
   */
  get loggedUser(): User | null {
    return this.userService.loggedUser;
  }

  // /**
  //  * Takes the user datas as a parameter and gets the xp related user infos.
  //  * @param {User} user 
  //  * @returns 
  //  */
  // getUserLevelInfo(user?: User | null): { currentLvl: number; xpToNextLvl: number } | null {
  //   if (!user) {
  //     return null;
  //   }
  //   console.log(this.settingsService.getUserLevel(user));
    
  //   return this.settingsService.getUserLevel(user);
  // }
  
}
