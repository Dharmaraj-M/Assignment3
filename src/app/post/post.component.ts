import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private sampleService: SampleService, private router: Router, private fb: FormBuilder) { }

  id: number;
  dataSource: any;
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  myForm = this.fb.group(
    {
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    }
  );
  ngOnInit(): void {
  }

  postData() {
    this.sampleService.setTodo({
      'userId': this.myForm.get('userId').value,
      'id': 101,
      'title': this.myForm.get('title').value,
      'body': this.myForm.get('body').value
    }).subscribe((res) => this.dataSource = [res]);
    // setTimeout(function(){ alert("Hello"); }, 3000);
    setTimeout(() => { 
      this.router.navigateByUrl('todos');
    }, 5000);
  }
}
