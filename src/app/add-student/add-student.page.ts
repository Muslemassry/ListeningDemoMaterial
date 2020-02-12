import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {

  form : FormGroup ;  
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm () {
    this.form = new FormGroup({
      name : new FormControl('' , Validators.required),  
      email : new FormControl('' , Validators.required), 
      password : new FormControl('' , Validators.required), 
      confirm : new FormControl('' , Validators.required) 
    });
  }

  addStudent(form) {    
    alert('Form has been submitted: ' + this.form.value.email+ ' '  + this.form.value.password);
  }

  ionViewWillEnter() {
    this.initForm();
  }
}
