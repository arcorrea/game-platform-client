import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TodoListService } from 'src/app/services/todo-list/todo-list.service';

@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.scss']
})
export class WebapiComponent implements OnInit, OnDestroy {

  public todoList: Array<string> = [];

  private readonly _destroying$ = new Subject<void>();

  constructor(private todoListService: TodoListService) { }


  ngOnInit(): void {
  }

  public loadTodoList(): void {
    this.todoListService.getTodoList()
                        .pipe(takeUntil(this._destroying$))
                        .subscribe(res => this.todoList = res);
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
