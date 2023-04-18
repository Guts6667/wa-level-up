import { Component } from "@angular/core";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"],
})
export class StatsComponent {
  stats = {
    attack: 100,
    defense: 100,
    criticalRate: 10,
    criticalDamage: 10,
    hp: 10000,
  };
  constructor (){}
}
