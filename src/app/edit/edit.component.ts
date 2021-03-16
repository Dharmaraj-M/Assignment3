import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private sampleService: SampleService, private route: ActivatedRoute, private router: Router) { }

  dataSource: any='';
  userId: string='';
  id: string='';
  title: string='';
  completed?: boolean;

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.sampleService.getEditTodo(this.route.snapshot.params['id']).subscribe((res) => {
        this.dataSource = [res];
        this.userId = this.dataSource[0].userId;
        this.id = this.dataSource[0].id;
        this.title = this.dataSource[0].title;
        this.completed = this.dataSource[0].completed;
      });
    }
  }
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  tableDisplay: boolean = false;
  updateTodo(): void {
    this.sampleService.setPatchTodo({
      "userId": this.userId,
      "id": this.id,
      "title": this.title,
      "completed": this.completed 
    }).subscribe((res) => {
      this.dataSource = [res];
      this.tableDisplay = true;
    });
    setTimeout(() => { 
      this.router.navigateByUrl('todos');
    }, 5000);
  }

}
