import { Injectable } from "@angular/core";
import { Settings } from "../interfaces/settings";
import { User } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  public settings: Settings[] = [];

  constructor(private httpClient: HttpClient) {}

  /**
   * This method fetchs the settings datas
   * @returns {Settings[]}
   */
  public getSettings(): Observable<Settings[]> {
    return this.httpClient
      .get<Settings[]>("http://localhost:3000/settings")
      .pipe(
        map((settings: Settings[]) => {
          this.settings = settings;
          return settings;
        })
      );
  }
  /**
   * This method takes the user xp and proceeds it to return the current level
   * and the amount of xp required to get to the next level.
   * @param {User[]} user
   * @returns
   */
  getUserLevel(user: User): { currentLvl: number; xpToNextLvl: number } | null {
    if (!user) {
      return null;
    }

    const currentSettings = this.settings[0];

    let currentXP = user.xp;
    let currentLvl = 0;
    let previousLvlRequirement = currentSettings.xpFirstLevel;
    let nextLvlRequirement =
      currentSettings.xpFirstLevel * currentSettings.xpRatioByLevel;

    while (
      currentXP >= nextLvlRequirement &&
      currentLvl < currentSettings.maxLevel
    ) {
      currentLvl += 1;
      previousLvlRequirement = nextLvlRequirement;
      nextLvlRequirement =
        previousLvlRequirement * currentSettings.xpRatioByLevel;
    }

    const xpToNextLvl = nextLvlRequirement - currentXP;

    return {
      currentLvl,
      xpToNextLvl,
    };
  }
}
