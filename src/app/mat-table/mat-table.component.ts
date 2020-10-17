import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  data = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://randomuser.me/api/?results=20').subscribe(f => {
      this.data = f.results;
    })
    console.log(this.data);
  }
  

}
