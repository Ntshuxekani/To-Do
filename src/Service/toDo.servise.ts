import { Injectable } from "@angular/core";


@Injectable()

export class ToDo{
    toDoItems=[];
    progressItems=[];
    addNewTodo(newItem:string){
        this.toDoItems.push(newItem);
    }
getAllToDoItems():any{
    return this.toDoItems;
}
getAllProgressTasks():any{
    return this.progressItems;
}
addToProgress(index: number){
this.progressItems.push(this.toDoItems[index]);
this.removeTaskToDo(index);
console.log(this.progressItems);
}
removeTaskToDo(index: number){
    this.toDoItems.splice(index, 1);
} 
}