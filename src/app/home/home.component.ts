import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  colors:string[]=["green","yellow","blue", 
  "red", "purple","orange","gray","black", "white"];
  filteredOptions!:Observable<string[]>;
  formControl=new FormControl('');  
  
  ngOnInit(): void {
    this.filteredOptions=this.formControl.valueChanges.pipe(
      startWith(''), map(value=>this._FILTER(value||''))
    );
  }

  private _FILTER(value:string):string[]{
    const searchValue=value.toLocaleLowerCase();
    return this.colors.filter(option=>option.toLocaleLowerCase().includes(searchValue));
  }

}
