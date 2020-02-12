import { Component, OnInit } from '@angular/core';
import  { DataService } from './../data.service';
@Component({
  selector: 'app-done-test',
  templateUrl: './done-test.page.html',
  styleUrls: ['./done-test.page.scss'],
})
export class DoneTestPage implements OnInit {
  testResults : any = [{stepName:'', passed : false}];
  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  studentEmail : string = '';
  testName : string = '';
  ionViewWillEnter () {
    this.testResults = this.dataService.doneTest.testSteps;
    this.testName = this.dataService.doneTest.testName;
    this.studentEmail = this.dataService.doneTest.studentEmail;
  }

}
