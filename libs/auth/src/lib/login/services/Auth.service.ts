import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  http = inject(HttpClient);

  login(payload: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/notes`, {
      ...payload,
    });
  }

  getNotes() {
    return this.http.get<any>(`http://localhost:3000/api/notes`);
  }
}
