import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private sampleService: SampleService, private router: Router) { }

  displayedColumns: string[] = ['id', 'title', 'completed', 'Edit'];
  dataSource: any;
  data: any;
  ngOnInit(): void {
    this.sampleService.getTodo().subscribe((res) => {
      this.dataSource = res;
      this.data = new MatTableDataSource(this.dataSource);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }
  editTodos(id: number) {
    this.router.navigateByUrl('edit/'+id);
  }
  goTo(){
    this.router.navigateByUrl('post');
  }
}
