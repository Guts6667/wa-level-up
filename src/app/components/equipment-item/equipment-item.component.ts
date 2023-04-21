import { Component } from "@angular/core";

@Component({
  selector: "app-equipment-item",
  templateUrl: "./equipment-item.component.html",
  styleUrls: ["./equipment-item.component.scss"],
})
export class EquipmentItemComponent {
  items = [
    {
      name: "Butcher's Claws",
      url: "img1.png",
    },
    {
      name: "Dwarf's King Sword",
      url: "img2.png",
    },
    {
      name: "Fire's Guardian",
      url: "img3.png",
    },
  ];
}
