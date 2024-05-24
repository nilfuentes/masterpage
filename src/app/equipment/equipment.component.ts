import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { CatalogNode } from '../models/catalog-node';
import { Well } from '../models/well';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { MatDialog } from '@angular/material/dialog';
import { SurfaceRunningEquipment, } from '../models/surface-running-equipment';
import { Observable} from 'rxjs';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent implements OnInit{ 
  @ViewChild(MatTable)
  table!: MatTable<SurfaceRunningEquipment>; 

  well:Well=new Well(0,'');

  isSurfaceEquipmentFinished:boolean=false;
  isEquipmentInstalledFinished:boolean=false;

  step:number=0;

  surfaceEquipmentList:SurfaceRunningEquipment[]=[
    
  ];

  //Form Controls
  surfaceProductNumberFormControl=new FormControl('');
  surfaceCatalogNodeFormControl=new FormControl('');
  surfaceDescriptionFormControl=new FormControl('');
  surfaceSerialFormControl=new FormControl('');
  surfaceQuantityFormControl=new FormControl('');
  surfaceKeyComponentFormControl=new FormControl('');
  equipmentListFormControl=new FormControl('');

  columns:string[]=['Product Number','Catalog Node','Serial','Quantity', 'Is Key Component'];

  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  isSurfaceKeyComponent=false;

  observableEquipmentList!:Observable<SurfaceRunningEquipment[]>;

  //List
  surfaceCatalogNodeList:CatalogNode[]=[];

  public constructor(private dialogRef:MatDialog){}

  ngOnInit(): void {    
    
  } 
  

  //Event methods

  onChangeCatalogNodeEvent(event:MatOptionSelectionChange, CatalogNode:CatalogNode ){
    if(event.source.selected==true){      
    }
  }
  //Save Events

  SaveSurfaceEquipment(){
    let surfaceEquipment:SurfaceRunningEquipment=new SurfaceRunningEquipment();
    surfaceEquipment.productNumber=parseInt(this.surfaceProductNumberFormControl.value??'',0);
    surfaceEquipment.catalogNode.name=this.surfaceCatalogNodeFormControl.value??'';
    surfaceEquipment.serial=parseInt(this.surfaceSerialFormControl.value??'',0);
    surfaceEquipment.quantity=parseInt(this.surfaceQuantityFormControl.value??'',0);

    this.surfaceEquipmentList.push(surfaceEquipment);
    this.table.renderRows();
    this.SendPopupNotification('The Well stem data has been added to the record: '
                               );    
    this.isSurfaceEquipmentFinished=true; 
    

  }
  //Clear Events
  ClearSurfaceEquipment(){
  }

  private SendPopupNotification(message:string){
    this.dialogRef.open(DialogViewComponent,{
      data:{
        message:message
      }
    }   
  );
  }
  /*
  surfaceEquipmentList:SurfaceRunningEquipment[]=[
    {productNumber:1223,
    catalogNode:new CatalogNode(1,'Equipment 1'),
    serial:123445,
    quantity:34,
    description:'description 1',
    isKeyComponent:false
    }
  ]
  */
  

  // table code
 

 
  


}
