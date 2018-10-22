import { ToDo } from './../../Service/toDo.servise';
import { Component } from '@angular/core';

/**
 * Generated class for the DoingListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'doing-list',
  templateUrl: 'doing-list.html'
})
export class DoingListComponent {

  text: string;
progressItems=[];
  constructor(private todo:ToDo){
    this.progressItems=this.todo.getAllProgressTasks();
  }


}
