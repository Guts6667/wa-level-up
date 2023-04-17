import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[] = [];
  private _loggedUser: User | null = null;
  private isLoggedIn: boolean = false;
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(
      map((users: User[]) => {
        this.users = users;
        return users;
      })
    );
  }

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

  login(): boolean {
    return (this.isLoggedIn = true);
  }
  logout(): void {
    this.isLoggedIn = false;
    this.loggedUser = null;
  }
  get isLogged(): boolean {
    return this.isLoggedIn;
  }

  get loggedUser(): User | null {
    return this._loggedUser;
  }

  set loggedUser(user: User | null) {
    this._loggedUser = user;
  }
}

/**
 *
 * @param userId
 * @param goldAmount
 */

// public addGold(userId: number, goldAmount: number) {
//   // Get my user by comparing id
//   const user = this.users.find((myUser) => myUser.id === userId);
//   if (user) {
//     user.gold += goldAmount;
//     this.httpClient
//       // Update user infos in db
//       .put<User>(`http://localhost:3000/users/${userId}`, user)
//       .subscribe((updateUser: User) => {
//         console.log(
//           `User gold updated successfully, ${updateUser?.name} now has ${updateUser?.gold}`
//         );
//       });
//   } else {
//     console.log('User not found');
//   }
// }
