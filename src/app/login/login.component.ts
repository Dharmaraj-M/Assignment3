import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myLoginForm = this.fb.group(
    {
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
    }
  );
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  result: string = '';
  onSubmit() {
    if(this.myLoginForm.get('userName').value == 'test' && this.myLoginForm.get('passWord').value == 'Test@123') {
      this.router.navigateByUrl('todos');
    } 
    else {
      this.result = 'Invalid User Name/Password';
      this.myLoginForm.reset();
    }
  }
}
