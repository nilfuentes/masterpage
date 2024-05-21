import { Component, Input, OnInit } from '@angular/core';
import { TrackRecord } from '../models/track-record';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-record',
  templateUrl: './track-record.component.html',
  styleUrl: './track-record.component.css'
})
export class TrackRecordComponent implements OnInit{
  trackRecord:TrackRecord;  
  @Input() id:string='';
  message:string='New Record';

  constructor(private route: ActivatedRoute){
    this.trackRecord=new TrackRecord();       
  }
    
  ngOnInit() {          
    if(this.id!='0'){
      this.message='Record Id: '+this.id;
    }
  }



}
