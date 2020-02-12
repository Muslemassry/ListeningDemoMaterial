import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  returnUrl : any = '';
  form : FormGroup ;
  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) { }
  loading = false;
  error = '';

  ngOnInit() {
    this.form = new FormGroup ({
      email : new FormControl('' , Validators.required), 
      password : new FormControl('' , Validators.required)
    });
  }

  ionViewWillEnter() {
    this.form = new FormGroup ({
      email : new FormControl('' , [Validators.required, Validators.email]), 
      password : new FormControl('' , Validators.required)
    });

    this.error = '';

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  doLogin(form) {
    if (form.invalid) {
      return;
  }

  this.loading = true;
  this.authenticationService.login(this.form.value.email, this.form.value.password)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
              this.loading = false;
          });


    // alert('Form has been submitted: ' + this.form.value.name + ' ' + this.form.value.email+ ' '  + this.form.value.password+ ' '  + this.form.value.confirm);
  }
}
