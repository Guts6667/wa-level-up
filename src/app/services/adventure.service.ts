import { Injectable } from '@angular/core';
import { Adventure } from '../interfaces/adventure';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdventureService {
  public adventures: Adventure[] = [];

  constructor(private httpClient: HttpClient) {}

  public getAdventures(): Observable<Adventure[]> {
    return this.httpClient
      .get<Adventure[]>('http://localhost:3000/adventures')
      .pipe(
        map((adventures: Adventure[]) => {
          this.adventures = adventures;
          return adventures;
        })
      );
  }

  public findAdventure(name: string ): Observable<Adventure | null> {
    return this.getAdventures().pipe(
      map(
        (adventures: Adventure[]) =>
          adventures.find(
            (adventure) => adventure.name.toLowerCase() === name.toLowerCase()
          ) || null
      )
    );
  }
}
