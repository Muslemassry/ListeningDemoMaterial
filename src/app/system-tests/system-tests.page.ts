import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService} from './../data.service';

@Component({
  selector: 'app-system-tests',
  templateUrl: './system-tests.page.html',
  styleUrls: ['./system-tests.page.scss'],
})
export class SystemTestsPage implements OnInit {

  testName : string = "";
  tests = [] as  any;

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private router: Router, private dataService : DataService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tests, event.previousIndex, event.currentIndex);
  }

  addATest() {
    if (this.testName === undefined || this.testName.trim() == '') {
      alert('empty name');
      return;
    }

    this.testName = this.testName.trim();
    for(var i = 0; i < this.tests.length; i++) {
      if(this.tests[i].testName == this.testName) {
        alert('cannot add duplicate test with same name');
        return;
      } 
    }

    var newTest = {testId: undefined, testName : this.testName, testSteps: [] as any, isDragable: true, 
      isTimed: false, timeBound:0.0, isRety: false};
    this.tests.push(newTest);
    this.testName = undefined;
  }

  updateTest(test) {
    this.save();
    this.dataService.tempTestDifinition = test;
    this.router.navigate(['/test-definition']);
  }

  save () {
    this.dataService.saveSystemTests(this.tests);
  }

  saveNavigate () {
    this.dataService.saveSystemTests(this.tests);
    // do navigation
  }
  ionViewWillEnter() {
    // load from dataService
    this.tests = Object.assign([], this.dataService.systemTests);
    if (this.tests.length > 1) {
      this.tests = this.tests.sort((n1,n2) => {
        if (n1.testName > n2.testName) {
            return 1;
        } else if (n1.testName < n2.testName) {
            return -1;
        } else {
          return 0;
        }
      });
    }
  }

  ionViewWillLeave() {
    // verify it is saved
    console.log(this.dataService.systemTests);
    console.log(this.tests); 
  }
}
