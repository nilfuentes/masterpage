import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateWellComponent } from './wel-management/create-well/create-well.component';
import { TrackRecordComponent } from './track-record/track-record.component';
import { RecordListComponent } from './record-list/record-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'create-well', component:CreateWellComponent},
  {path:'track-record/:id', component:TrackRecordComponent},
  {path:'record-list', component:RecordListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    provideRouter(routes,withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
