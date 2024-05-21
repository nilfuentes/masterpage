import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrl: './dialog-view.component.css'
})
export class DialogViewComponent implements OnInit {
  message;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){
    this.message=data.message;
  }

  ngOnInit(): void {    
  }

}
