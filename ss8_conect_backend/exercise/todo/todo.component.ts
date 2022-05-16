import { Component, OnInit } from '@angular/core';
import {Todo} from "./todo";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "./service/todo.service";
import {ActivatedRoute, Router} from "@angular/router";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  content = new FormControl();


  constructor(private service: TodoService, private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.service.save(todo).subscribe(() => {
        console.log('create success !');
        this.getAll();
      }, errors => {
        console.log(errors);
      });
      this.content.reset();
    }
  }

  getAll() {
    this.service.getAllTodos().subscribe(data=> {
      this.todos = data;
    }, errors => {
      console.log(errors)
    })
  }

  deleteTodo(id: number) {
    this.service.delete(id).subscribe(() => {
      console.log('success!');
      this.getAll();
    }, errors => {
      console.log(errors);
    });
  }
}
