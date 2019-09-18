import { Component, OnInit } from '@angular/core';
import {log} from 'util';
import {AssignmentModel} from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
    nameOfStudent: string;
    nameOfAssignment: string;
    dateOfAssignment: Date;

    title = 'My Applications Scratch';
    assignments: AssignmentModel[] = [{
      nameOfStudent: 'Leonard',
      nameOfAssignment: 'Math',
      dateAssignment: new Date(),
      submitted: true
    }, {
      nameOfStudent: 'Pinkman',
      nameOfAssignment: 'English',
      dateAssignment: new Date(),
      submitted: false
    }];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const assignment= new AssignmentModel();
    assignment.nameOfStudent = this.nameOfStudent;
    assignment.nameOfAssignment = this.nameOfAssignment;
    assignment.dateAssignment = this.dateOfAssignment;
    assignment.submitted = false;

    this.assignments.push(assignment);
    log('Assignment Button has been triggered! ');
  }
}
