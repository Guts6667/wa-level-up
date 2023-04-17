import { Injectable } from '@angular/core';
import { Settings } from '../interfaces/settings';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public settings: Settings[] = [];

  constructor(private httpClient: HttpClient) {}

  public getSettings(): Observable<Settings[]> {
    return this.httpClient
      .get<Settings[]>('http://localhost:3000/settings')
      .pipe(
        map((settings: Settings[]) => {
          this.settings = settings;
          return settings;
        })
      );
  }
}
