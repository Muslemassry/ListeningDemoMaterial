import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService} from './../data.service';

@Component({
  selector: 'app-test-definition',
  templateUrl: './test-definition.page.html',
  styleUrls: ['./test-definition.page.scss'],
})
export class TestDefinitionPage implements OnInit {

  stepName : string = "";
  currentTestDefinition : any = {testSteps:[]};

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private router: Router, private dataService : DataService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.currentTestDefinition.testSteps, event.previousIndex, event.currentIndex);
  }

  addAStep() {
    // if (this.stepName == '') {
    //   alert('empty name');
    //   return;
    // }
    
    // this.currentTestDefinition.testSteps.forEach(element => {
    //   if(element.stepName == this.stepName) {
    //     alert('cannot add duplicate step with same name');
    //     return;
    //   } 
    // });

    if (this.stepName === undefined || this.stepName.trim() == '') {
      alert('empty name');
      return;
    }

    this.stepName = this.stepName.trim();
    for(var i = 0; i < this.currentTestDefinition.testSteps.length; i++) {
      if(this.currentTestDefinition.testSteps[i].stepName == this.stepName) {
        alert('cannot add duplicate step with same name');
        return;
      } 
    }

    var tempStep = {testId: this.currentTestDefinition.testId, testName: this.currentTestDefinition.testName, stepId: undefined, stepName: this.stepName, images: [], correctAnswer: undefined, isDragable: true, isTimed: false, timeBound:0.0, isRety: false}
    this.currentTestDefinition.testSteps.push(tempStep);
    this.stepName = null;
  }

  updateStep(step) {
    this.dataService.saveTestDefinistion(this.currentTestDefinition);
    this.dataService.tempStep = step;
    this.dataService.tempTestDifinition = undefined;
    this.router.navigate(['/step']);
  }

  assignChild() {
    this.dataService.saveTestDefinistion(this.currentTestDefinition);
    this.dataService.tempTestDifinition = this.currentTestDefinition;
    this.router.navigate(['/child-assign-test']);
  }

  removeStep(step) {   
    this.currentTestDefinition.testSteps.forEach(element => {
      if(element.stepId == step.stepId && element.stepName == step.stepName) {
        const index = this.currentTestDefinition.testSteps.indexOf(element, 0);
        if (index > -1) {
          this.currentTestDefinition.testSteps.splice(index, 1);
        }
      } 
    });
  }

  save() {
    this.dataService.saveTestDefinistion(this.currentTestDefinition);
    this.dataService.tempTestDifinition = undefined;
    this.router.navigate(['/system-tests']);
  }

  ionViewWillEnter() {
    // load from dataService
    if (this.dataService.tempTestDifinition === undefined) {
      console.log('error no test definition');
      this.router.navigate(['/system-tests']);
      return;
    }

    this.currentTestDefinition = {
      testId: this.dataService.tempTestDifinition.testId,
      testName : this.dataService.tempTestDifinition.testName, 
      testSteps: Object.assign([], this.dataService.tempTestDifinition.testSteps), 
      isDragable: this.dataService.tempTestDifinition.isDragable, 
      isTimed: this.dataService.tempTestDifinition.isTimed, 
      timeBound:this.dataService.tempTestDifinition.timeBound, 
      isRety: this.dataService.tempTestDifinition.isRety};
    
    if (this.currentTestDefinition.testSteps.length > 1) {
      this.currentTestDefinition.testSteps = this.currentTestDefinition.testSteps.sort((n1,n2) => {
        if (n1.stepName > n2.stepName) {
            return 1;
        } else if (n1.stepName < n2.stepName) {
            return -1;
        } else {
          return 0;
        }
      });
    }

    console.log(this.currentTestDefinition);
  }

  ionViewWillLeave() {
    // verify it is saved
    console.log(this.dataService.tempTestDifinition);
    console.log(this.currentTestDefinition);
  }
}
