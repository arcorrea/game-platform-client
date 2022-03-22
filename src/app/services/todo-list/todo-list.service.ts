import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { protectedResources } from 'src/app/auth-config';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  public getTodoList(): Observable<Array<string>> {
    return this.http.get<Array<string>>(protectedResources.todoListApi.endpoint);
  }
}
