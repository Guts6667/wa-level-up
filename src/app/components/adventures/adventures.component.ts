import { Component } from '@angular/core';
import { AdventureService } from 'src/app/services/adventure.service';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.scss'],
})
export class AdventuresComponent {
  constructor(public adventureService: AdventureService) {
    adventureService.getAdventures().subscribe();
  }
}
