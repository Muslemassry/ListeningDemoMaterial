import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';
import { AuthenticationService } from './../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private dataService : DataService, private router : Router, private authenticationService: AuthenticationService) {
    this.dataService.systemTests = [{"testName":"test1","testSteps":[{"testName":"test1","stepName":"step1","images":[{"testId":0,"imageName":"nose-01"},{"testId":0,"imageName":"bike-01"}, {"testId":0,"imageName":"bike-01"}, {"testId":0,"imageName":"bike-01"}, {"testId":0,"imageName":"bike-01"},{"testId":0,"imageName":"ball-01"}],"correctAnswer":"nose-01","isDragable":true,"isTimed":false,"isRety":false,"repeateType":"1"},{"testName":"test1","stepName":"step2","images":[{"testId":0,"imageName":"bike-01"},{"testId":0,"imageName":"ball-01"},{"testId":0,"imageName":"nose-01"}],"correctAnswer":"bike-01","isDragable":false,"isTimed":false,"isRety":false,"repeateType":"1"},{"testName":"test1","stepName":"step3","images":[{"testId":0,"imageName":"ball-01"},{"testId":0,"imageName":"nose-01"},{"testId":0,"imageName":"bike-01"}],"correctAnswer":"ball-01","isDragable":true,"isTimed":false,"isRety":false,"repeateType":"1"}],"isDragable":true,"isTimed":false,"timeBound":0,"isRety":false}];
    this.dataService.systemStudents = [{"studentId":0,"studentName":"Ahmed Ali","studentEmail":"AhmedAli@email.com"},{"studentId":1,"studentName":"سارة محمود","studentEmail":"SaraMahoud@email.com"},{"studentId":2,"studentName":"أيمن علي","studentEmail":"AumanAli@email.com"},{"studentId":3,"studentName":"Naser Said","studentEmail":"NasrS@email.com","assignedTest":{"studentId":3,"studentEmail":"NasrS@email.com","testName":"test1","testSteps":[{"testName":"test1"},{"testName":"test1"},{"testName":"test1"}]}},{"studentId":3,"studentName":"Hasan Salem","studentEmail":"HasanS@email.com"},{"studentId":3,"studentName":"Haytham","studentEmail":"Haytham@email.com"}];
  }

  goToTest() {
    const currentUser = this.authenticationService.getCurrentUserValue();
    console.log(currentUser);
    var currentStudent : any =  this.dataService.systemStudents.filter(student => (student.studentEmail == currentUser.username));
    console.log('currentStudent', currentStudent);
    if (currentStudent !== undefined && currentStudent[0] !== undefined && currentStudent[0].assignedTest !== undefined) {
      this.dataService.currentStudent = currentStudent[0];
      var currentTestSteps = this.dataService.systemTests.filter(test => test.testId == this.dataService.currentStudent.assignedTest.testId && test.testName == this.dataService.currentStudent.assignedTest.testName)[0].testSteps;
      var currentStep = 0;
      for(let i = 0; i < this.dataService.currentStudent.assignedTest.testSteps.length; i++) {
        if (this.dataService.currentStudent.assignedTest.testSteps[i].passed === undefined) {
          currentStep = i;
          break;
        }
      }

      if (currentTestSteps[currentStep].isDragable) {
        this.router.navigate(['/take-test']);
      } else {
        this.router.navigate(['/take-test-clickable']);
      }
      
    } else {
      alert('No Assigned Tests');
    }
  }
}
