import { Component } from '@angular/core';
import { Basin } from '../models/basin';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.css'
})
export class RecordListComponent {

  columns:string[]=['Id','Name',];

  datasource:Basin[]=[
    {id:1, name:'Basin1'},
    {id:1, name:'Basin2'},
    {id:1, name:'Basin3'}
  ];  

}
