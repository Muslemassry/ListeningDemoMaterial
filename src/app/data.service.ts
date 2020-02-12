import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  testDefinition : any = {
    testId: 0,
    testName : 'TestName', 
    testSteps: [
      {testId: 0, testName: 'TestName', stepName : 'step#0', stepId: 0, images: ['',], correctAnswer: '', isDragable: true, isTimed: false, timeBound:0.0, isRety: false, repeateType : undefined},
      {testId: 0, testName: 'TestName', stepName : 'step#1', stepId: 1, images: ['',], correctAnswer: '', isDragable: true, isTimed: false, timeBound:0.0, isRety: false, repeateType : undefined},], 
    isDragable: true, 
    isTimed: false, 
    timeBound:0.0, 
    isRety: false};

  doneTest : any = undefined;
  systemTests = [] as any;
  tempTestDifinition : any = undefined;
  tempStep : any = undefined;

  // contains students in the system and their assigned tests. every student must be assigned only one test.
  systemStudents = [
    {studentId: 0, studentName: 'Ahmed Ali', studentEmail: 'AhmedAli@email.com', assignedTest : undefined},
    {studentId: 1, studentName: 'سارة محمود', studentEmail: 'SaraMahoud@email.com', assignedTest : undefined},
    {studentId: 2, studentName: 'أيمن علي', studentEmail: 'AumanAli@email.com', assignedTest : undefined},
    {studentId: 3, studentName: 'Naser Said', studentEmail: 'NasrS@email.com', assignedTest : undefined},
    {studentId: 3, studentName: 'Hasan Salem', studentEmail: 'HasanS@email.com', assignedTest : undefined},
    {studentId: 3, studentName: 'Haytham', studentEmail: 'Haytham@email.com', assignedTest : undefined},] as any;

  currentStudent : any = undefined;
  constructor() { }

  getCurrentTest() {
    return this.testDefinition;
  }
  
  changeCurrentTest(test) {
    this.testDefinition = test;
  }

  saveSystemTests(tests) {
    this.systemTests = tests;
  }

  saveTestDefinistion(testDefinition : any) {
    var foundIndex = -1;
    this.systemTests.forEach(element => {
      if(element.testId == testDefinition.testId && element.testName == testDefinition.testName) {
        const index = this.systemTests.indexOf(element, 0);
        foundIndex = index;
      } 
    });

    if (foundIndex > -1) {
      this.systemTests.splice(foundIndex, 1);
    }

    this.systemTests.push(testDefinition);
  }

  saveTestStep(step : any) {
    var foundTestIndex = -1;
    this.systemTests.forEach(element => {
      if(element.testId == step.testId && element.testName == step.testName) {
        const index = this.systemTests.indexOf(element, 0);
        foundTestIndex = index;
      } 
    });

    var foundStepIndex = -1;
    if (foundTestIndex > -1) {
      this.systemTests[foundTestIndex].testSteps.forEach(element => {
        if(element.stepId == step.stepId && element.stepName == step.stepName) {
          const index = this.systemTests[foundTestIndex].testSteps.indexOf(element, 0);
          foundStepIndex = index;
        } 
      });
    }

    if (foundStepIndex > -1) {
      this.systemTests[foundTestIndex].testSteps.splice(foundStepIndex, 1);
    }
    
    this.systemTests[foundTestIndex].testSteps.push(step);
    this.tempTestDifinition = this.systemTests[foundTestIndex];
  }

  removeTestDefinistion(testDefinition : any) {
    this.systemTests.forEach(element => {
      if(element.testId == testDefinition.testId && element.testName == testDefinition.testName) {
        const index = this.systemTests.indexOf(element, 0);
        if (index > -1) {
          this.systemTests.splice(index, 1);
        }
      } 
    });
  }

  removeTestStep(step : any) {
    var foundTestIndex = -1;
    this.systemTests.forEach(element => {
      if(element.testId == step.testId && element.testName == step.testName) {
        const index = this.systemTests.indexOf(element, 0);
        foundTestIndex = index;
      } 
    });

    var foundStepIndex = -1;
    if (foundTestIndex > -1) {
      this.systemTests[foundTestIndex].images.forEach(element => {
        if(element.stepId == step.stepId && element.stepName == step.stepName) {
          const index = this.systemTests[foundTestIndex].images.indexOf(element, 0);
          foundStepIndex = index;
        } 
      });
    }

    if (foundStepIndex > -1) {
      this.systemTests[foundTestIndex].images.splice(foundStepIndex, 1);
    }
  }

  assignStudentToTest(studentsToAssign : [] , testDefinition : any) {
    for (let i = 0; i < studentsToAssign.length; i++) {
      var tempStudentToAssign : any = studentsToAssign[i];
      if (tempStudentToAssign.assignedTest === undefined || tempStudentToAssign.assignedTest.testSteps === undefined 
            || tempStudentToAssign.assignedTest.testSteps[0] === undefined
            || tempStudentToAssign.assignedTest.testSteps[0].passed === undefined) {
        
          for (let j = 0; j < this.systemStudents.length; j++) {
          if (tempStudentToAssign.studentId == this.systemStudents[j].studentId) {
            this.systemStudents[j].assignedTest = {studentId : tempStudentToAssign.studentId, studentEmail: tempStudentToAssign.studentEmail, testId: testDefinition.testId, testName: testDefinition.testName, testSteps: testDefinition.testSteps.map(
              function (step) {
              return {testId: testDefinition.testId, testName: testDefinition.testName, stepId: step.stepId, passed: undefined}
            })}

            break;
          }
        }
      } 
    }

    // this.systemStudents.forEach(element => {
    //   if(element.studentId == testDefinition.testId && element.testName == testDefinition.testName) {
    //     const index = this.systemTests.indexOf(element, 0);
    //     foundIndex = index;
    //   } 
    // });    
  }
}
