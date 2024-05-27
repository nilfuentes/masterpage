import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import{MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { CreateWellComponent } from './wel-management/create-well/create-well.component'
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TrackRecordComponent } from './track-record/track-record.component';
import { MatDialogModule } from '@angular/material/dialog';
import {
  
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {  MatSlideToggleModule} from '@angular/material/slide-toggle';


import {MatTableModule} from '@angular/material/table';
import { DialogViewComponent } from './dialog-view/dialog-view.component';
import { RecordListComponent } from './record-list/record-list.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentInstalledComponent } from './equipment-installed/equipment-installed.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateWellComponent,
    TrackRecordComponent,
    DialogViewComponent,
    RecordListComponent,
    EquipmentComponent,
    EquipmentInstalledComponent,
    SidenavMenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatAccordion,
    MatExpansionModule,
    MatDatepickerModule,
    MatStepperModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule
    
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    FormBuilder
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
