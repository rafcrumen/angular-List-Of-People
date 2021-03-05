import { Component, VERSION } from "@angular/core";
import { Person } from "./model/person.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentState = 0;
  title = "People List";
  people: Person[] = [];

  add() {
    this.currentState = 1;
  }
  save(person: Person) {
    this.people.push(person);
    this.currentState = 0;
  }
  delete(person: Person) {
    this.people.splice(this.people.findIndex(p => p == person), 1);
  }
}
