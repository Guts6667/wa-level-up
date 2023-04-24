import { Component, Input, OnInit } from "@angular/core";
import { Adventure } from "src/app/interfaces/adventure";
import { User } from "src/app/interfaces/user";
import { AdventureService } from "src/app/services/adventure.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-adventures",
  templateUrl: "./adventures.component.html",
  styleUrls: ["./adventures.component.scss"],
})
export class AdventuresComponent {
  @Input() currentUser: User | null = null;

  constructor(
    public adventureService: AdventureService,
    public userService: UserService
  ) {
    adventureService.getAdventures().subscribe();
  }
  OnInit() {
    if (this.currentUser !== null) {
      console.log("ICI: ", this.currentUser);
    }
  
  }
  logEvent(element: HTMLElement, adventure: Adventure) {
    console.log(adventure);

    let selectedAdventure = element;
    console.log(selectedAdventure.firstChild?.textContent);

    let listAdventures = Array.from(
      document.getElementsByClassName("adventure-item")
    );
    selectedAdventure.classList.add("highlighted-item");
    for (let item of listAdventures) {
      if (item !== selectedAdventure) {
        item.classList.add("hidden");
       
      }
    }
    if(this.currentUser !== null){
      let user = this.currentUser
      this.updateCurrentUser(adventure, user)
      console.log(user);
    }
    
  }

  updateCurrentUser(adventure: Adventure, user: User) {
    let cachedLvlInfos = window.localStorage.getItem("myUser");
    if (cachedLvlInfos) {
      let lvlInfos = JSON.parse(cachedLvlInfos);
      if (lvlInfos.currentLvl >= adventure.levelRequired) {
        user.xp += adventure.winXP;
        console.log(user);
        user.gold += adventure.winGold;
        
        this.userService.updateUser(user)
        console.log(user);
        
      }
    }
  }
}
