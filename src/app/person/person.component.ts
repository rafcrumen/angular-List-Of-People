import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Person } from "../model/person.model";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"]
})
export class PersonComponent implements OnInit {
  @Output() onAdded: EventEmitter<Person>;
  @Output() onCancel: EventEmitter<boolean>;
  form: FormGroup;
  constructor() {
    this.onAdded = new EventEmitter<Person>();
    this.onCancel = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl("")
    });
  }
  save() {
    this.onAdded.emit(this.form.value);
  }
  cancelar() {
    this.onCancel.emit(false);
  }
}
