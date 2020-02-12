import { Component,ViewChild,ElementRef, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import {CdkDragDrop, CdkDrag, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Events } from '@ionic/angular';
import { timer } from 'rxjs'
import { DataService } from "../data.service";

@Component({
  selector: 'app-test-step',
  templateUrl: './test-step.page.html',
  styleUrls: ['./test-step.page.scss'],
})
export class TestStepPage implements OnInit, AfterViewChecked {
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
  taskIndex : number = 0;
  private currentTest : any;


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

  constructor(private screenOrientation: ScreenOrientation, 
              public events : Events, 
              private cdr: ChangeDetectorRef,
              private dataService: DataService) { 
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
    this.currentTest = this.dataService.getCurrentTest();
    console.log('td is ', this.currentTest.testId);
    this.currentTest.testId = this.currentTest.testId+1;
    this.showSpinner = true;
    timer(2000).subscribe(() => this.showSpinner = false);
    this.testImages = [
      {src: '../../assets/appImages/bag-01.png', display: true}, 
      {src: '../../assets/appImages/ball-01.png', display: true}, 
      {src: '../../assets/appImages/bike-01.png', display: true}, 
      {src: '../../assets/appImages/nose-01.png', display: true},
      {src: '../../assets/appImages/bag-01.png', display: true}, 
      {src: '../../assets/appImages/ball-01.png', display: false}, 
      {src: '../../assets/appImages/bike-01.png', display: false}, 
      {src: '../../assets/appImages/nose-01.png', display: false},
      {src: '../../assets/appImages/bag-01.png', display: false}, 
      {src: '../../assets/appImages/ball-01.png', display: false}, 
      {src: '../../assets/appImages/bike-01.png', display: false}, 
      {src: '../../assets/appImages/nose-01.png', display: false}, ]; 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ionViewWillLeave() {
    this.screenOrientation.unlock();
  }
  
  setDragableStyles() {
    let styles = {
      'background-color': 'red'
    };

    return "";
  }

  released(event: any) {
    console.log('drag', event.source.element.nativeElement.getBoundingClientRect());
  
    this.dragableX =  event.source.element.nativeElement.getBoundingClientRect().x;
    this.dragableY =  event.source.element.nativeElement.getBoundingClientRect().y;
    this.dragableWidth = event.source.element.nativeElement.getBoundingClientRect().width;
    this.dragableHight = event.source.element.nativeElement.getBoundingClientRect().height;

    console.log('drop', this.dropBlock.nativeElement.getBoundingClientRect());
    this.droppableX = this.dropBlock.nativeElement.getBoundingClientRect().x;
    this.droppableY = this.dropBlock.nativeElement.getBoundingClientRect().y;
    this.droppableWidth = this.dropBlock.nativeElement.getBoundingClientRect().width;
    this.droppableHight = this.dropBlock.nativeElement.getBoundingClientRect().height;

    if ((((this.dragableX >= this.droppableX && this.dragableX <= (this.droppableX + this.droppableWidth))) && (this.dragableY >= this.droppableY && (this.dragableY <= (this.droppableY + this.droppableHight))))
    || ((((this.dragableX + this.dragableWidth) >= this.droppableX && (this.dragableX + this.dragableWidth) <= (this.droppableX + this.droppableWidth))) && ((this.dragableY + this.dragableHight) >= this.droppableY && ((this.dragableY + this.dragableHight) <= (this.droppableY + this.droppableHight))))
    || (((this.dragableX >= this.droppableX && this.dragableX <= (this.droppableX + this.droppableWidth))) && ((this.dragableY + this.dragableHight) >= this.droppableY && ((this.dragableY + this.dragableHight) <= (this.droppableY + this.droppableHight))))
    || ((((this.dragableX + this.dragableWidth) >= this.droppableX && (this.dragableX + this.dragableWidth) <= (this.droppableX + this.droppableWidth))) && (this.dragableY >= this.droppableY && (this.dragableY <= (this.droppableY + this.droppableHight))))) {
      
      var filename = (event.source.element.nativeElement.id).match(/.*\/([^/]+)\.([^?]+)/i)[1];
      if (filename == 'bag-01') {
        this.modalImage = '../../assets/tenor.gif';
      } else {
        this.modalImage = '../../assets/giphy.gif';
      }

      this.showModal = true;
      timer(3000).subscribe(() => {
        this.showModal = false;
        this.onLoadNext();
      });
      
      //         this.showSpinner = true;
        // timer(4000).subscribe(() => {
        //   this.showSpinner = false;
        //   this.onLoadNext();
        // });
    } else {
      this.onLoadNext();
    }
  }

  private setDefaultPositions() {
      // if (this.dragablePosition1 == null && this.dragable1 != null) this.dragablePosition1 = {x: this.dragable1.nativeElement.getBoundingClientRect().x, y: this.dragable1.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition2 == null && this.dragable2 != null) this.dragablePosition2 = {x: this.dragable2.nativeElement.getBoundingClientRect().x, y: this.dragable2.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition3 == null && this.dragable3 != null) this.dragablePosition3 = {x: this.dragable3.nativeElement.getBoundingClientRect().x, y: this.dragable3.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition4 == null && this.dragable4 != null) this.dragablePosition4 = {x: this.dragable4.nativeElement.getBoundingClientRect().x, y: this.dragable4.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition5 == null && this.dragable5 != null) this.dragablePosition5 = {x: this.dragable5.nativeElement.getBoundingClientRect().x, y: this.dragable5.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition6 == null && this.dragable6 != null) this.dragablePosition6 = {x: this.dragable6.nativeElement.getBoundingClientRect().x, y: this.dragable6.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition7 == null && this.dragable7 != null) this.dragablePosition7 = {x: this.dragable7.nativeElement.getBoundingClientRect().x, y: this.dragable7.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition8 == null && this.dragable8 != null) this.dragablePosition8 = {x: this.dragable8.nativeElement.getBoundingClientRect().x, y: this.dragable8.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition9 == null && this.dragable9 != null) this.dragablePosition9 = {x: this.dragable9.nativeElement.getBoundingClientRect().x, y: this.dragable9.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition10 == null && this.dragable10 != null) this.dragablePosition10 = {x: this.dragable10.nativeElement.getBoundingClientRect().x, y: this.dragable10.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition11 == null && this.dragable11 != null) this.dragablePosition11 = {x: this.dragable11.nativeElement.getBoundingClientRect().x, y: this.dragable11.nativeElement.getBoundingClientRect().y};
      // if (this.dragablePosition12 == null && this.dragable12 != null) this.dragablePosition12 = {x: this.dragable12.nativeElement.getBoundingClientRect().x, y: this.dragable12.nativeElement.getBoundingClientRect().y};
  }

  private resetPositions() {
    // if (this.dragablePosition1 != null) this.dragableStyle1 = {left: this.dragablePosition1.x, top: this.dragablePosition1.y};
    // if (this.dragablePosition2 != null) this.dragableStyle2 = {left: this.dragablePosition2.x, top: this.dragablePosition2.y};
    // if (this.dragablePosition3 != null) this.dragableStyle3 = {left: this.dragablePosition3.x, top: this.dragablePosition3.y};
    // if (this.dragablePosition4 != null) this.dragableStyle4 = {left: this.dragablePosition4.x, top: this.dragablePosition4.y};
    // if (this.dragablePosition5 != null) this.dragableStyle5 = {left: this.dragablePosition5.x, top: this.dragablePosition5.y};
    // if (this.dragablePosition6 != null) this.dragableStyle6 = {left: this.dragablePosition6.x, top: this.dragablePosition6.y};
    // if (this.dragablePosition7 != null) this.dragableStyle7 = {left: this.dragablePosition7.x, top: this.dragablePosition7.y};
    // if (this.dragablePosition8 != null) this.dragableStyle8 = {left: this.dragablePosition8.x, top: this.dragablePosition8.y};
    // if (this.dragablePosition9 != null) this.dragableStyle9 = {left: this.dragablePosition9.x, top: this.dragablePosition9.y};
    // if (this.dragablePosition10 != null) this.dragableStyle10 = {left: this.dragablePosition10.x, top: this.dragablePosition10.y};
    // if (this.dragablePosition11 != null) this.dragableStyle11 = {left: this.dragablePosition11.x, top: this.dragablePosition11.y};
    // if (this.dragablePosition12 != null) this.dragableStyle12 = {left: this.dragablePosition12.x, top: this.dragablePosition12.y};
  }

  public ngAfterViewChecked(): void {
    this.setDefaultPositions();
  }

  onLoadNext() {
    this.taskIndex++;
    this.reloading = true;
    this.cdr.detectChanges();
    this.reloading = false;
    this.cdr.detectChanges();
  }
}
  