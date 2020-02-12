import { Component,ViewChild,ElementRef, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import {CdkDragDrop, CdkDrag, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Events } from '@ionic/angular';
import { timer } from 'rxjs'
import { DataService } from "../data.service";
import { Router, ActivatedRoute } from '@angular/router';
import {Platform} from '@ionic/angular';
@Component({
  selector: 'app-take-test-clickable',
  templateUrl: './take-test-clickable.page.html',
  styleUrls: ['./take-test-clickable.page.scss'],
})
export class TakeTestClickablePage implements OnInit, AfterViewChecked {
  imageSrc : string = '../../assets/appImages/bag-01.png';
  dragableStyle1 = {};
  dragableStyle2 = {};
  dragableStyle3 = {};
  dragableStyle4 = {};
  dragableStyle5 = {};
  dragableStyle6 = {};
  dragableStyle7 = {};
  dragableStyle8 = {};
  dragableStyle9 = {};
  dragableStyle10 = {};
  dragableStyle11 = {};
  dragableStyle12 = {};
  currentStep : number = undefined;
  private currentTest : any;
  isDragable : boolean = true;
  private stopTimer : boolean = true;
  private currentTestSteps : any = [];
  @ViewChild("dropBlock", {static : false}) dropBlock: ElementRef;
  
  // dragables
  @ViewChild("dragable1", {static : false}) dragable1: ElementRef;
  @ViewChild("dragable2", {static : false}) dragable2: ElementRef;
  @ViewChild("dragable3", {static : false}) dragable3: ElementRef;
  @ViewChild("dragable4", {static : false}) dragable4: ElementRef;
  @ViewChild("dragable5", {static : false}) dragable5: ElementRef;
  @ViewChild("dragable6", {static : false}) dragable6: ElementRef;
  @ViewChild("dragable7", {static : false}) dragable7: ElementRef;
  @ViewChild("dragable8", {static : false}) dragable8: ElementRef;
  @ViewChild("dragable9", {static : false}) dragable9: ElementRef;
  @ViewChild("dragable10", {static : false}) dragable10: ElementRef;
  @ViewChild("dragable11", {static : false}) dragable11: ElementRef;
  @ViewChild("dragable12", {static : false}) dragable12: ElementRef;

  droppableX : number = 0;
  droppableY : number = 0;
  droppableWidth : number = 0;
  droppableHight : number = 0;

  dragableX : number = 0;
  dragableY : number = 0;
  dragableWidth : number = 0;
  dragableHight : number = 0;

  dragablePositionOriginal1 : any = undefined;
  dragablePositionOriginal2 : any = undefined;
  dragablePositionOriginal3 : any = undefined;
  dragablePositionOriginal4 : any = undefined;
  dragablePositionOriginal5 : any = undefined;
  dragablePositionOriginal6 : any = undefined;
  dragablePositionOriginal7 : any = undefined;
  dragablePositionOriginal8 : any = undefined;
  dragablePositionOriginal9 : any = undefined;
  dragablePositionOriginal10 : any = undefined;
  dragablePositionOriginal11 : any = undefined;
  dragablePositionOriginal12 : any = undefined;

  dragablePosition1 : any = undefined;
  dragablePosition2 : any = undefined;
  dragablePosition3 : any = undefined;
  dragablePosition4 : any = undefined;
  dragablePosition5 : any = undefined;
  dragablePosition6 : any = undefined;
  dragablePosition7 : any = undefined;
  dragablePosition8 : any = undefined;
  dragablePosition9 : any = undefined;
  dragablePosition10 : any = undefined;
  dragablePosition11 : any = undefined;
  dragablePosition12 : any = undefined;
  showSpinner : boolean = true;
  reloading = false;
  showModal = false;
  modalImage : string = '';
  private retryCount : number = 1;

  constructor(private screenOrientation: ScreenOrientation, 
              public events : Events, 
              private cdr: ChangeDetectorRef,
              private dataService: DataService, private router : Router,
              private platform: Platform) {
    this.events.subscribe('eventName', () => {
      // event based action
    });
  }

  ngOnInit() {
  }
  
  testImages : any = [{src: '', display: false}, 
  {src: '', display: false}, 
  {src: '', display: false}, 
  {src: '', display: false}, 
  {src: '', display: false},
  {src: '', display: false}, 
  {src: '', display: false}, 
  {src: '', display: false}, 
  {src: '', display: false}, 
  {src: '', display: false},
  {src: '', display: false}, 
  {src: '', display: false}, ]; 

  ionViewWillEnter() {
    this.onLoadNext();
    this.setDefaultPositions(0, 0);
    this.resetPositions();
    // this.currentTest = this.dataService.getCurrentTest();
    // console.log('td is ', this.currentTest.testId);
    // this.currentTest.testId = this.currentTest.testId+1;
    // this.showSpinner = true;
    // timer(2000).subscribe(() => this.showSpinner = false);
    // this.testImages = [
    //   {src: '../../assets/appImages/bag-01.png', display: true}, 
    //   {src: '../../assets/appImages/ball-01.png', display: true}, 
    //   {src: '../../assets/appImages/bike-01.png', display: true}, 
    //   {src: '../../assets/appImages/nose-01.png', display: true},
    //   {src: '../../assets/appImages/bag-01.png', display: true}, 
    //   {src: '../../assets/appImages/ball-01.png', display: false}, 
    //   {src: '../../assets/appImages/bike-01.png', display: false}, 
    //   {src: '../../assets/appImages/nose-01.png', display: false},
    //   {src: '../../assets/appImages/bag-01.png', display: false}, 
    //   {src: '../../assets/appImages/ball-01.png', display: false}, 
    //   {src: '../../assets/appImages/bike-01.png', display: false}, 
    //   {src: '../../assets/appImages/nose-01.png', display: false}, ]; 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.currentTestSteps = this.dataService.systemTests.filter(test => test.testId == this.dataService.currentStudent.assignedTest.testId && test.testName == this.dataService.currentStudent.assignedTest.testName)[0].testSteps;
    // console.log(JSON.stringify(this.dataService.currentStudent));
    this.loadStep(undefined);
  }

  loadStep(currentStep : number) {
    if (currentStep === undefined) {
      for(let i = 0; i < this.dataService.currentStudent.assignedTest.testSteps.length; i++) {
        if (this.dataService.currentStudent.assignedTest.testSteps[i].passed === undefined) {
          this.currentStep = i;
          break;
        }
      }
    } else {
      if (this.dataService.currentStudent.assignedTest.testSteps[currentStep] === undefined) {
        // test is finished
        this.dataService.doneTest = this.dataService.currentStudent.assignedTest;
        this.dataService.currentStudent.assignedTest = undefined;
        this.router.navigate(['/done-test']);
      } 
    }
    
    if (this.currentTestSteps[this.currentStep].isRety == false) {
      this.retryCount = 0;
    } else {
      this.retryCount = this.currentTestSteps[this.currentStep].repeateType;
    }
    
    if (this.currentTestSteps[this.currentStep].isTimed == true) {
      this.stopTimer = false;
      timer(this.currentTestSteps[this.currentStep].timeBound).subscribe(() => {
        if (!this.stopTimer) {
          this.saveCurrentStep('no answer');
          this.loadStep(++this.currentStep);
        }
      });
    }

    this.isDragable = this.currentTestSteps[this.currentStep].isDragable;
    if (this.isDragable == true) {
      this.router.navigate(['/take-test']);
      return;
    }

    // this.showSpinner = true;
    
    this.testImages = this.currentTestSteps[this.currentStep].images.map(
      function (image) {
      return {src: '../../assets/appImages/'+ image.imageName + '.png', display: true}
    });
    this.imageCount = this.testImages.length;
    this.loadedImageCount = 0;
    
    var numberOfEmpty = 12 - this.testImages.length;
    for (let i = 0; i < numberOfEmpty; i++) {
      this.testImages.push({src: '', display: false});
    }
  }

  saveCurrentStep(answer : string) {
    this.stopTimer = true;
    if (this.currentTestSteps[this.currentStep].correctAnswer == answer) {
      this.dataService.currentStudent.assignedTest.testSteps[this.currentStep].passed = true;
      this.modalImage = '../../assets/tenor.gif';
    } else {
      this.dataService.currentStudent.assignedTest.testSteps[this.currentStep].passed = false;      
      this.modalImage = '../../assets/giphy.gif';
    }

    this.dataService.currentStudent.assignedTest.testSteps[this.currentStep].stepName = this.currentTestSteps[this.currentStep].stepName;
    this.showModal = true;
    timer(2000).subscribe(() => {
      this.showModal = false;
      this.loadStep(++this.currentStep);
      this.resetPositions();
      if (this.isDragable == false) {
        this.onLoadNext();
      }
    });    
  }

  answer (answer : string) {
    this.retryCount--;
    if (this.retryCount < 0) {
      this.saveCurrentStep(answer);
    } else if (this.currentTestSteps[this.currentStep].correctAnswer == answer) {
      this.saveCurrentStep(answer);
    }
  }

  selectImage(imageName : any) {
    if (this.isDragable == false) {
      var filename = imageName.match(/.*\/([^/]+)\.([^?]+)/i)[1];
      this.answer(filename);
    }
  }

  ionViewWillLeave() {
    this.screenOrientation.unlock();
  }

  imageCount : number = 0;
  loadedImageCount : number = 0;
  
  imageLoaded(){
    this.loadedImageCount++;
    this.showSpinner = true;
    console.log('================>>>> ', this.imageCount);
    if (this.loadedImageCount == this.imageCount) {
      // hide spinner
      this.showSpinner = false;
      // set timer for sound
      console.log('================>>>> DONE LOADING');
    }

  }

  startedDragging(event: any) {
    console.log('startedDragging', event.source.element.nativeElement.getBoundingClientRect());
  }

  released(event: any) {
    console.log('released drag', event.source.element.nativeElement.getBoundingClientRect());
    this.dragableX =  event.source.element.nativeElement.getBoundingClientRect().x;
    this.dragableY =  event.source.element.nativeElement.getBoundingClientRect().y;
    this.dragableWidth = event.source.element.nativeElement.getBoundingClientRect().width;
    this.dragableHight = event.source.element.nativeElement.getBoundingClientRect().height;

    // console.log('drop', this.dropBlock.nativeElement.getBoundingClientRect());
    this.droppableX = this.dropBlock.nativeElement.getBoundingClientRect().x;
    this.droppableY = this.dropBlock.nativeElement.getBoundingClientRect().y;
    this.droppableWidth = this.dropBlock.nativeElement.getBoundingClientRect().width;
    this.droppableHight = this.dropBlock.nativeElement.getBoundingClientRect().height;

    if ((((this.dragableX >= this.droppableX && this.dragableX <= (this.droppableX + this.droppableWidth))) && (this.dragableY >= this.droppableY && (this.dragableY <= (this.droppableY + this.droppableHight))))
    || ((((this.dragableX + this.dragableWidth) >= this.droppableX && (this.dragableX + this.dragableWidth) <= (this.droppableX + this.droppableWidth))) && ((this.dragableY + this.dragableHight) >= this.droppableY && ((this.dragableY + this.dragableHight) <= (this.droppableY + this.droppableHight))))
    || (((this.dragableX >= this.droppableX && this.dragableX <= (this.droppableX + this.droppableWidth))) && ((this.dragableY + this.dragableHight) >= this.droppableY && ((this.dragableY + this.dragableHight) <= (this.droppableY + this.droppableHight))))
    || ((((this.dragableX + this.dragableWidth) >= this.droppableX && (this.dragableX + this.dragableWidth) <= (this.droppableX + this.droppableWidth))) && (this.dragableY >= this.droppableY && (this.dragableY <= (this.droppableY + this.droppableHight))))) {
      
      var filename = (event.source.element.nativeElement.id).match(/.*\/([^/]+)\.([^?]+)/i)[1];
      this.answer(filename);
    } else {
      // this.onLoadNext();
    }

    this.resetPositions();
  }

  private setDefaultPositions(width: number, height: number) {
    console.log('the width', Math.floor(width/4));
    console.log('the height', Math.floor(height/4));
    // this.dragablePositionOriginal1 = {x: Math.floor(width/4)*0, y: Math.floor(height/4)*0};
    // this.dragablePositionOriginal2 = {x: Math.floor(width/4)*1, y: Math.floor(height/4)*0};
    // this.dragablePositionOriginal3 = {x: Math.floor(width/4)*2, y: Math.floor(height/4)*0};
    // this.dragablePositionOriginal4 = {x: Math.floor(width/4)*3, y: Math.floor(height/4)*0};
    // this.dragablePositionOriginal5 = {x: Math.floor(width/4)*0, y: Math.floor(height/4)*1};
    // this.dragablePositionOriginal6 = {x: Math.floor(width/4)*1, y: Math.floor(height/4)*1};
    // this.dragablePositionOriginal7 = {x: Math.floor(width/4)*2, y: Math.floor(height/4)*1};
    // this.dragablePositionOriginal8 = {x: Math.floor(width/4)*3, y: Math.floor(height/4)*1};
    // this.dragablePositionOriginal9 = {x: Math.floor(width/4)*0, y: Math.floor(height/4)*2};
    // this.dragablePositionOriginal10 = {x: Math.floor(width/4)*1, y: Math.floor(height/4)*2};
    // this.dragablePositionOriginal11 = {x: Math.floor(width/4)*2, y: Math.floor(height/4)*2};
    // this.dragablePositionOriginal12 = {x: Math.floor(width/4)*3, y: Math.floor(height/4)*2};

    this.dragablePositionOriginal1 = {x: 0, y: 0};
    this.dragablePositionOriginal2 = {x: 1, y: 0};
    this.dragablePositionOriginal3 = {x: 2, y: 0};
    this.dragablePositionOriginal4 = {x: 3, y: 0};
    this.dragablePositionOriginal5 = {x: 0, y: 1};
    this.dragablePositionOriginal6 = {x: 1, y: 1};
    this.dragablePositionOriginal7 = {x: 2, y: 1};
    this.dragablePositionOriginal8 = {x: 3, y: 1};
    this.dragablePositionOriginal9 = {x: 0, y: 2};
    this.dragablePositionOriginal10 = {x: 1, y: 2};
    this.dragablePositionOriginal11 = {x: 2, y: 2};
    this.dragablePositionOriginal12 = {x: 3, y: 2};
  } 

  private resetPositions() {
    this.dragablePosition1 = {x: this.dragablePositionOriginal1.x, y: this.dragablePositionOriginal1.y};
    this.dragablePosition2 = {x: this.dragablePositionOriginal2.x, y: this.dragablePositionOriginal2.y};
    this.dragablePosition3 = {x: this.dragablePositionOriginal3.x, y: this.dragablePositionOriginal3.y};
    this.dragablePosition4 = {x: this.dragablePositionOriginal4.x, y: this.dragablePositionOriginal4.y};
    this.dragablePosition5 = {x: this.dragablePositionOriginal5.x, y: this.dragablePositionOriginal5.y};
    this.dragablePosition6 = {x: this.dragablePositionOriginal6.x, y: this.dragablePositionOriginal6.y};
    this.dragablePosition7 = {x: this.dragablePositionOriginal7.x, y: this.dragablePositionOriginal7.y};
    this.dragablePosition8 = {x: this.dragablePositionOriginal8.x, y: this.dragablePositionOriginal8.y};
    this.dragablePosition9 = {x: this.dragablePositionOriginal9.x, y: this.dragablePositionOriginal9.y};
    this.dragablePosition10 = {x: this.dragablePositionOriginal10.x, y: this.dragablePositionOriginal10.y};
    this.dragablePosition11 = {x: this.dragablePositionOriginal11.x, y: this.dragablePositionOriginal11.y};
    this.dragablePosition12 = {x: this.dragablePositionOriginal12.x, y: this.dragablePositionOriginal12.y};
  }

  ionViewDidEnter() {
    console.log(this.dragable1.nativeElement.getBoundingClientRect());
    this.router;
    this.platform.ready().then((readySource) => {
      console.log('Width: ' + this.platform.width());
      console.log('Height: ' + this.platform.height());
      // this.setDefaultPositions(this.platform.width(), this.platform.height());
      // this.resetPositions();
    });
  }

  public ngAfterViewChecked(): void {

  }

  onLoadNext() {
    this.loadedImageCount = 0;
    this.reloading = true;
    this.cdr.detectChanges();
    this.reloading = false;
    this.cdr.detectChanges();
  }
}

