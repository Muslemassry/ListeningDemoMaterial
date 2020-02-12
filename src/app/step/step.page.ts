import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService} from './../data.service';

export interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-step',
  templateUrl: './step.page.html',
  styleUrls: ['./step.page.scss'],
})
export class StepPage implements OnInit {
  types: Type[] = [
    {value: '0', viewValue: 'Dragable'},
    {value: '1', viewValue: 'Clickable'}
  ];

  repeateTypes: Type[] = [
    {value: '1', viewValue: 'Two Times'},
    {value: '2', viewValue: 'Three Times'}
  ];

  stepType : any = '';
  repeateType : any = '';
  stepTime : any = '';

  imageName : string = "";
  testId: any = 0;

  step : any = {images: []};
  stepAnswer : string = undefined;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private router: Router, private dataService : DataService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('dropped inside the list', event.isPointerOverContainer);
    if (event.isPointerOverContainer == true) {
      moveItemInArray(this.step.images, event.previousIndex, event.currentIndex);
    } else {
      this.step.images.splice(event.previousIndex, 1);
    }
  }

  addImage() {
    if (this.imageName === undefined || this.imageName.trim() == '') {
      alert('empty name');
      return;
    }

    this.imageName = this.imageName.trim();
    for(var i = 0; i < this.step.images.length; i++) {
      if(this.step.images[i].imageName == this.imageName) {
        alert('cannot add duplicate image with same name');
        return;
      }
    }

    this.step.images.push({testId: this.testId, imageName: this.imageName});
    this.imageName = null;
  }

  updateImage(image) {
    this.imageName = image.imageName;
    this.step.images = this.step.images.filter(obj => obj.imageName !== image.imageName).splice(0);
  }

  disableTimeSelect : any =  new FormControl();;
  disableRepeatableSelect : any =  new FormControl();;

  ionViewWillEnter() {
    // load from dataService
    if (this.dataService.tempStep === undefined) {
      console.log('error no test step');
      this.router.navigate(['/test-definition']);
      return;
    }

    console.log(this.dataService.tempStep.images);
    this.step = {testId: this.dataService.tempStep.testId, testName: this.dataService.tempStep.testName, 
      stepName : this.dataService.tempStep.stepName, stepId: this.dataService.tempStep.stepId, 
      images: Object.assign([], this.dataService.tempStep.images), 
      correctAnswer: this.dataService.tempStep.correctAnswer, 
      isDragable: this.dataService.tempStep.isDragable, isTimed: this.dataService.tempStep.isTimed, 
      timeBound:this.dataService.tempStep.timeBound, isRety: this.dataService.tempStep.isRety, repeateType : this.dataService.tempStep.repeateType};
    
    if(this.step.isDragable === undefined || this.step.isDragable == true) {
      this.stepType = this.types[0].value;
    } else {
      this.stepType = this.types[1].value;
    }
    
    if(this.dataService.tempStep.repeateType === undefined || this.dataService.tempStep.repeateType == 1) {
      this.repeateType = this.repeateTypes[0].value;
    } else {
      this.repeateType = this.repeateTypes[1].value;
    }

    this.stepAnswer = this.step.correctAnswer;
    this.stepTime = this.step.timeBound;
    
    if(this.step.isTimed === undefined || this.step.isTimed === null || this.step.isTimed == false) {
      this.disableTimeSelect = new FormControl();
    } else {
      this.disableTimeSelect = new FormControl({value: ''});
    }

    if(this.step.isRety === undefined || this.step.isRety === undefined || this.step.isRety == true) {
      this.disableRepeatableSelect = new FormControl({value: ''});  
    } else {
      this.disableRepeatableSelect = new FormControl();
    }
  }

  ionViewWillLeave() {
    // verify it is saved
  }

  save() {
    if(this.stepType == this.types[0].value) {
      this.step.isDragable = true;
    } else {
      this.step.isDragable = false;
    }
    
    if(this.repeateType == this.repeateTypes[0].value) {
      this.step.repeateType = this.repeateTypes[0].value;
    } else {
      this.step.repeateType = this.repeateTypes[1].value;
    }

    if(this.disableTimeSelect === undefined 
      || this.disableTimeSelect.value == null 
      || this.disableTimeSelect.value == undefined || this.disableTimeSelect.value == false) {
      this.step.isTimed = false;
    } else {
      this.step.isTimed = true;
    }

    if(this.stepTime === undefined || this.stepTime == '') {
      this.step.timeBound = undefined;
    } else {
      this.step.timeBound = this.stepTime;
    }

    if(this.disableRepeatableSelect === undefined 
      || this.disableRepeatableSelect.value == null 
      || this.disableRepeatableSelect.value == undefined
      || this.disableRepeatableSelect.value == false) {
      this.step.isRety = false;
    } else {
      this.step.isRety = true;
    }

    this.step.correctAnswer = this.stepAnswer;

    this.dataService.saveTestStep(this.step);
    this.dataService.tempStep = undefined;
    this.router.navigate(['/test-definition']);
  }
}
