import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-assign-test',
  templateUrl: './child-assign-test.page.html',
  styleUrls: ['./child-assign-test.page.scss'],
})
export class ChildAssignTestPage implements OnInit {
  childName : string;
  available = [];

  notAssignedObj = [] as any;

  tempObj = {value: ''};
  
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private router : Router, private dataService : DataService) { }

  ngOnInit() {
  }

  saveAssignedObj() {
    // alert(this.assignedObj);
    this.assignStudentToTest(this.notAssignedObj, this.dataService.tempTestDifinition);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.available.filter(option => option.studentName.toLowerCase().indexOf(filterValue) === 0);
  }

  addToUnassignedObj() {
    if (this.childName === undefined || this.childName.trim() == '') {
      alert('please choose a chile name');
      return;
    }

    var foundIndex = -1;
    this.available.forEach(element => {
      if(element.studentName == this.childName) {
        const index = this.available.indexOf(element, 0);
        foundIndex = index;

        this.notAssignedObj.push({studentId: element.studentId, 
                                studentName: element.studentName,     
                                studentEmail: element.studentEmail});
      }
    });

    if (foundIndex > -1) {
      this.available.splice(foundIndex, 1);
    }

    this.childName = '';
  }



  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

  ionViewWillEnter() {
    // load from dataService
    if (this.dataService.tempTestDifinition === undefined) {
      console.log('error no test definition');
      this.router.navigate(['/system-tests']);
      return;
    }

    console.log(this.dataService.tempTestDifinition.testSteps);

    this.available = [];
    this.notAssignedObj = []

    this.dataService.systemStudents.forEach(element => {
      if(element.assignedTest === undefined) {
        this.available.push({studentId: element.studentId, 
                             studentName: element.studentName, 
                             studentEmail: element.studentEmail});
      } else if(element.assignedTest.testId === this.dataService.tempTestDifinition.testId 
          && element.assignedTest.testName === this.dataService.tempTestDifinition.testName) {
        this.notAssignedObj.push({studentId: element.studentId, 
                                  studentName: element.studentName, 
                                  studentEmail: element.studentEmail,
                                  assignedTest: element.assignedTest});
      }
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)));
  }

  assignStudentToTest(studentsToAssign : [] , testDefinition : any) {
    this.dataService.assignStudentToTest(studentsToAssign, testDefinition);
    this.router.navigate(['/test-definition']);
  }
}
