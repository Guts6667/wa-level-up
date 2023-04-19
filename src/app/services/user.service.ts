import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[] = [];
  private _loggedUser: User | null = null;
  private isLoggedIn: boolean = false;
  public userChanged: EventEmitter<void> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  /**
   * Returns an array of object with all the user datas
   * @returns {User[]} 
   */
  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(
      map((users: User[]) => {
        this.users = users;
        return users;
      })
    );
  }

  /**
   * Takes the userName as a parameter and returns the datas of the user
   * @param {string} name 
   * @returns {User} 
   */
  public findUser(name: string): Observable<User | null> {
    return this.getUsers().pipe(
      map(
        (users: User[]) =>
          users.find(
            (user) => user.name.toLowerCase() === name.toLowerCase()
          ) || null
      )
    );
  }

  /**
   * Allows to login the user
   * @returns {boolean}
   */
  login(): boolean {
    return (this.isLoggedIn = true);
  }
  /**
   * Allows to logOut and empty the userDatas
   */
  logout(): void {
    this.isLoggedIn = false;
    this.loggedUser = null;
  }
  /**
   * Method used to check if the user is logged in
   */
  get isLogged(): boolean {
    return this.isLoggedIn;
  }

  /**
   * Method used to retrieve the user datas
   */
  get loggedUser(): User | null {
    return this._loggedUser;
  }

  /**
   * Setter used to set the logged user datas
   */
  set loggedUser(user: User | null) {
    this._loggedUser = user;
    this.isLoggedIn = user !== null;
  }
}
