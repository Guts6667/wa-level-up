import { Injectable } from "@angular/core";
import { Settings } from "../interfaces/settings";
import { User } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  public settings: Settings = {
    xpFirstLevel: 0,
    xpRatioByLevel: 0,
    maxLevel: 0,
  };

  constructor(private httpClient: HttpClient) {}

  /**
   * This method fetchs the settings datas
   * @returns {Settings[]}
   */
  public getSettings(): Observable<Settings> {
    return this.httpClient.get<Settings>("http://localhost:3000/settings").pipe(
      map((settings: Settings) => {
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
  getUserLevel(user: User): {
    currentLvl: number;
    xpToNextLvl: number;
    remainingXp: number;
    xpFromCurrentToNextLevel: number;
  } | null {
    if (!user) {
      return null;
    }

    /**
     * Settings parameters
     */
    let xpToFirstLevel = this.settings.xpFirstLevel;
    let maxLvl = this.settings.maxLevel;

    /**
     * User Parameters
     */
    let currentXp = user.xp;
    let currentLevel = 1;
    let xpToNextLevel = xpToFirstLevel;
    let remainingXp = 0;
    let xpFromCurrentToNextLevel = 0;
    xpToNextLevel += xpToNextLevel * 1.5;

    remainingXp = xpToNextLevel - currentXp;

    while (
      currentXp > 500 &&
      currentLevel < maxLvl &&
      currentXp >= xpToNextLevel
    ) {
      currentLevel += 1;

      xpToNextLevel = xpToNextLevel * 1.5;
    }
    return {
      currentLvl: currentLevel,
      xpToNextLvl: xpToNextLevel,
      xpFromCurrentToNextLevel: xpToNextLevel - xpToFirstLevel,
      remainingXp: remainingXp,
    };
  }
}

/**
 * currentXp
 * xpFirstLevel;
 * xpRatio
 * maxLevel
 * userXp
 * currentLvl
 *
 *
 */
