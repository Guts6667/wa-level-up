import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-donjons',
  templateUrl: './donjons.component.html',
  styleUrls: ['./donjons.component.scss']
})
export class DonjonsComponent {
  @Input() currentUser : User | null = null;

OnInit(){
  if(this.currentUser !== null){
    console.log("ICI: ", this.currentUser);
  }
  
}
}
