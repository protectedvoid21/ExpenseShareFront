import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupResponse } from './models/group-response';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseApiService {
  constructor(private HttpClient: HttpClient, private authService: AuthService) {
  }

  getGroups(): Observable<GroupResponse[]> {
    return this.HttpClient.get<GroupResponse[]>(environment.apiUrl + 'groups');
  }
}
