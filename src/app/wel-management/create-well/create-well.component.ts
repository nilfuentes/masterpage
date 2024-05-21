import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl,ReactiveFormsModule} from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Observable, map, startWith } from 'rxjs';
import { Well } from '../../models/well';
import { Customer } from '../../models/customer';
import { SalesAccount } from '../../models/sales-account';
import { WellType } from '../../models/well-type';
import { Basin } from '../../models/basin';
import { GeoUnit } from '../../models/geo-unit';
import { Country } from '../../models/country';
import { Field } from '../../models/field';
import { Enviroment } from '../../models/enviroment';
import { TrackRecord } from '../../models/track-record';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogViewComponent } from '../../dialog-view/dialog-view.component';


@Component({
  selector: 'app-create-well',
  templateUrl: './create-well.component.html',
  styleUrl: './create-well.component.css'
})
export class CreateWellComponent implements OnInit {
  
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;  
  
  isCustomerFinished:boolean=false;
  isWellFinished:boolean=false;
  isWellStemFinished:boolean=false;
  isCompletionFinished:boolean=false;
  isSandFinished:boolean=false;
  isToolsFinished:boolean=false;
  isICDFinished:boolean=false;


  trackRecord:TrackRecord;
  well:Well; 

  customerList:Customer[]=[]; 
  wellList:Well[]=[];
  salesAccountList:SalesAccount[]=[];
  wellTypeList:WellType[]=[];
  basinList:Basin[]=[];
  geoUnitList:GeoUnit[]=[];
  mgtCountryList:Country[]=[];
  fieldList:Field[]=[];
  enviromentList:Enviroment[]=[];

  public constructor(private router: Router, private dialogRef: MatDialog){
    this.well=new Well(0,'');
    this.trackRecord=new TrackRecord();
    

    this.customerList=[
      {id:1, name:"ALLEDER, INC."},
      {id:2, name:"AMERIND OIL"},
      {id:3, name:"AMTEX"},
      {id:4, name:"ANADARKO - BRAZIL"},
      {id:5, name:"ANP - AGENCIA NACIONAL DO PETROLEO"},
      {id:6, name:"APACHE CORPORATION"},
      {id:7, name:"APACHE CORPORATION"},
      {id:8, name:"AVRA OIL AND GAS"},
      {id:9, name:"BENSON & SCHOEN OIL COMPANY INC"},
      {id:10, name:"BILL J. GRAHAM OIL AND GAS CORPORATION"},
      {id:11, name:"BIRDWELL"},
      {id:12, name:"BITECH PETROLEUM CORP."},
      {id:13, name:"BLS PRODUCTION COMPANY"},
      {id:14, name:"BOWERMAN OIL AND GAS"},
      {id:15, name:"BP"},
      {id:16, name:"BROTHERS PRODUCTION"},
      {id:17, name:"BRUCE A. WILBANKS"},
      {id:18, name:"BT OIL FIELD SUPPLY"},
      {id:19, name:"BUCKWHEAT RESOURCES"},
      {id:20, name:"BYRD OPERATING COMPANY"},
      {id:21, name:"C.E. JACOBS"},
      {id:22, name:"C.F. QUALIA OPERATING COMPANY"},
      {id:23, name:"CAPATAZ OPERATING"},
      {id:24, name:"CARAWAY OPERATING"},
      {id:25, name:"CENTRAL ENERGY PRODUCTION"},
      {id:26, name:"CERTIFIED PETROLEUM"},
      {id:27, name:"CHESTER UPHAM, JR."},
      {id:28, name:"CITATION OIL & GAS CORPORATION - WEST TEXAS AREA"},
      {id:29, name:"CLAY GRAY"},
      {id:30, name:"COCKRELL PRODUCTION"},
      {id:31, name:"COOPER OIL AND GAS, INC"},
      {id:32, name:"COTTONWOOD PETROLEUM"},
      {id:33, name:"D GAIL LATIMER"},
      {id:34, name:"D.C. TANKERSLEY"},
      {id:35, name:"DAKOTA RESOURCES"},
      {id:36, name:"DBO OIL"},
      {id:37, name:"DENTON EXPLORATION"},
      {id:38, name:"DEVON ENERGY DO BRASIL LTDA"},
      {id:39, name:"DINERO OPERATING COMPANY"},
      {id:40, name:"DISCOVERY OPERATING"},
      {id:41, name:"DRACO ENERGY, INC."},
      {id:42, name:"DUBLIN INTERNATIONAL PETROLEUM TANZANIA LIMITED"},
      {id:43, name:"DURANGO OPERATING"},
      {id:44, name:"E.D. ANDERSON"},
      {id:45, name:"E.G.L. RESOURCES"},
      {id:46, name:"ESSO EXPLORATION & PRODUCTION CHAD, INC."},
      {id:47, name:"F W OIL INTERESTS, INC"},
      {id:48, name:"IPC"},
      {id:49, name:"KOCH PETROLEO DO BRASIL LTDA"},
      {id:50, name:"KUWAIT DRILLING COMPANY K.S.C"},
      {id:51, name:"NAM"},
      {id:52, name:"NOBLE ENERGY, INC."},
      {id:53, name:"ORMAT"},
      {id:54, name:"OXY"},
      {id:55, name:"PEP-SRN-ACTIVO BURGOS"},
      {id:56, name:"PEP-SRN-ACTIVO POZA RICA-ALTAMIRA - PROYECTO ALTAMIRA"},
      {id:57, name:"PEP-SRN-ACTIVO REGIONAL DE EXPLORACION REGION NORTE"},
      {id:58, name:"PERFORADORA CENTRAL"},
      {id:59, name:"PETROBRAS - E&P NNE - UN BA"},
      {id:60, name:"PETROBRAS - E&P NNE - UN SEAL"},
      {id:61, name:"PETROBRAS - E&P SSE - UN RIO"},
      {id:62, name:"PETROBRAS INTERNACIONAL"},
      {id:63, name:"PETROSERV"},
      {id:64, name:"PITSA"},
      {id:65, name:"REPSOL  BRASIL S.A."},
      {id:66, name:"ROC OIL COMPANY LIMITED"},
      {id:67, name:"ROMTEX INTERNATIONAL, LLC"},
      {id:68, name:"SIPETROL"},
      {id:69, name:"SITE OIL TOOLS"},
      {id:70, name:"TOTAL E&P MYANMAR"},
      {id:71, name:"W. DALE MORRIS, INC."},
      {id:72, name:"YORKTON SECURITIES Inc."}      
  ];        
     
    this.wellList=[    
      new Well(1,"543P2-29"),
      new Well(2,"AB-1613"),
      new Well(3,"AK-10441"),
      new Well(4,"AL-10341"),
      new Well(5,"AL-766"),
      new Well(6,"Albarakah-41"),
      new Well(7,"AP-0566"),
      new Well(8,"AP1101"),
      new Well(9,"AP1664"),
      new Well(10,"AQ 1802"),
      new Well(11,"AQ-1421"),
      new Well(12,"AQ-1812"),
      new Well(13,"AR-1569"),
      new Well(14,"AR-1663"),
      new Well(15,"AR-1666"),
      new Well(16,"AR-3102"),
      new Well(17,"AS 1665"),
      new Well(18,"AS-1762"),
      new Well(19,"AS-1803"),
      new Well(20,"AS-1812"),
      new Well(21,"AS-1813"),
      new Well(22,"AT-1765"),
      new Well(23,"AT-1882"),
      new Well(24,"Buah A-1P"),
      new Well(25,"CM-235"),
      new Well(26,"Cosecha-CNW"),
      new Well(27,"DB-1"),
      new Well(28,"Infantas 3609"),
      new Well(29,"ITAYA-A11"),
      new Well(30,"Khuff A-1P"),
      new Well(31,"LT-18z"),
      new Well(32,"MKN AR1669"),
      new Well(33,"MKN AS1821"),
      new Well(34,"MKNAL0445-K74"),
      new Well(35,"MKNAN1617-K66"),
      new Well(36,"MKNAN1637-K64"),
      new Well(37,"MKNAQ1662"),
      new Well(38,"MKNAQ1663"),
      new Well(39,"MKNAR 3002"),
      new Well(40,"MKNAR 3003"),
      new Well(41,"MKNAR 3004"),
      new Well(42,"MKNAR 3012"),
      new Well(43,"MKNAR 3012S1"),
      new Well(44,"MKNAR1464"),
      new Well(45,"MKNAR1464S1"),
      new Well(46,"MKNAR1661"),
      new Well(47,"MKNAR1669"),
      new Well(48,"MKNAR1763"),
      new Well(49,"MKNAR2065-K69"),
      new Well(50,"MKNAR3165"),
      new Well(51,"MKNAR3167"),
      new Well(52,"MKNAS 3062"),
      new Well(53,"MKNAS3264"),
      new Well(54,"MKNAT 1572"),
      new Well(55,"MKNAT1567"),
      new Well(56,"MKNAT1615-K68"),
      new Well(57,"MKNAU1568"),
      new Well(58,"MKNAU1666"),
      new Well(59,"MKNAU1766"),
      new Well(60,"MUKH-077"),
      new Well(61,"PAINTBRUSH"),
      new Well(62,"Phase II - Pad 201 P2"),
      new Well(63,"Phase II - Pad 202 I3"),
      new Well(64,"PRUDHOE BAY18-26A"),
      new Well(65,"PY3 D4"),
      new Well(66,"QuaIboe-4"),
      new Well(67,"Reham West 9"),
      new Well(68,"Szentlorinckata-1"),
      new Well(69,"Szolnok ENY-1"),
      new Well(70,"WAE-12"),
      new Well(71,"WASSERBURGER 2"),
      new Well(72,"WRKM 101")

    ];    

    this.salesAccountList=[
      {id:1, name:"ALLEDER, INC."},
      {id:2, name:"AMERIND OIL"},
      {id:3, name:"AMTEX"},
      {id:4, name:"ANADARKO - BRAZIL"},
      {id:5, name:"ANP - AGENCIA NACIONAL DO PETROLEO"},
      {id:6, name:"APACHE CORPORATION"},
      {id:7, name:"APACHE CORPORATION"},
      {id:8, name:"AVRA OIL AND GAS"},
      {id:9, name:"BENSON & SCHOEN OIL COMPANY INC"},
      {id:10, name:"BILL J. GRAHAM OIL AND GAS CORPORATION"},
      {id:11, name:"BIRDWELL"},
      {id:12, name:"BITECH PETROLEUM CORP."},
      {id:13, name:"BLS PRODUCTION COMPANY"},
      {id:14, name:"BOWERMAN OIL AND GAS"},
      {id:15, name:"BP"},
      {id:16, name:"BROTHERS PRODUCTION"},
      {id:17, name:"BRUCE A. WILBANKS"},
      {id:18, name:"BT OIL FIELD SUPPLY"},
      {id:19, name:"BUCKWHEAT RESOURCES"},
      {id:20, name:"BYRD OPERATING COMPANY"},
      {id:21, name:"C.E. JACOBS"},
      {id:22, name:"C.F. QUALIA OPERATING COMPANY"},
      {id:23, name:"CAPATAZ OPERATING"},
      {id:24, name:"CARAWAY OPERATING"},
      {id:25, name:"CENTRAL ENERGY PRODUCTION"},
      {id:26, name:"CERTIFIED PETROLEUM"},
      {id:27, name:"CHESTER UPHAM, JR."},
      {id:28, name:"CITATION OIL & GAS CORPORATION - WEST TEXAS AREA"},
      {id:29, name:"CLAY GRAY"},
      {id:30, name:"COCKRELL PRODUCTION"},
      {id:31, name:"COOPER OIL AND GAS, INC"},
      {id:32, name:"COTTONWOOD PETROLEUM"},
      {id:33, name:"D GAIL LATIMER"},
      {id:34, name:"D.C. TANKERSLEY"},
      {id:35, name:"DAKOTA RESOURCES"},
      {id:36, name:"DBO OIL"},
      {id:37, name:"DENTON EXPLORATION"},
      {id:38, name:"DEVON ENERGY DO BRASIL LTDA"},
      {id:39, name:"DINERO OPERATING COMPANY"},
      {id:40, name:"DISCOVERY OPERATING"},
      {id:41, name:"DRACO ENERGY, INC."},
      {id:42, name:"DUBLIN INTERNATIONAL PETROLEUM TANZANIA LIMITED"},
      {id:43, name:"DURANGO OPERATING"},
      {id:44, name:"E.D. ANDERSON"},
      {id:45, name:"E.G.L. RESOURCES"},
      {id:46, name:"ESSO EXPLORATION & PRODUCTION CHAD, INC."},
      {id:47, name:"F W OIL INTERESTS, INC"},
      {id:48, name:"IPC"},
      {id:49, name:"KOCH PETROLEO DO BRASIL LTDA"},
      {id:50, name:"KUWAIT DRILLING COMPANY K.S.C"},
      {id:51, name:"NAM"},
      {id:52, name:"NOBLE ENERGY, INC."},
      {id:53, name:"ORMAT"},
      {id:54, name:"OXY"},
      {id:55, name:"PEP-SRN-ACTIVO BURGOS"},
      {id:56, name:"PEP-SRN-ACTIVO POZA RICA-ALTAMIRA - PROYECTO ALTAMIRA"},
      {id:57, name:"PEP-SRN-ACTIVO REGIONAL DE EXPLORACION REGION NORTE"},
      {id:58, name:"PERFORADORA CENTRAL"},
      {id:59, name:"PETROBRAS - E&P NNE - UN BA"},
      {id:60, name:"PETROBRAS - E&P NNE - UN SEAL"},
      {id:61, name:"PETROBRAS - E&P SSE - UN RIO"},
      {id:62, name:"PETROBRAS INTERNACIONAL"},
      {id:63, name:"PETROSERV"},
      {id:64, name:"PITSA"},
      {id:65, name:"REPSOL  BRASIL S.A."},
      {id:66, name:"ROC OIL COMPANY LIMITED"},
      {id:67, name:"ROMTEX INTERNATIONAL, LLC"},
      {id:68, name:"SIPETROL"},
      {id:69, name:"SITE OIL TOOLS"},
      {id:70, name:"TOTAL E&P MYANMAR"},
      {id:71, name:"W. DALE MORRIS, INC."},
      {id:72, name:"YORKTON SECURITIES Inc."} 
    ];
    
    this.wellTypeList=[
      {id:1, name:"Gas Production"},
      {id:1, name:"Oil and Gas Production"},
      {id:1, name:"Water Injection"},
      {id:1, name:"Gas Injection"},
      {id:1, name:"SAGD InjectOR"},
      {id:1, name:"SAGD Producer"},
      {id:1, name:"SAGD Observation"},
      {id:1, name:"Disposal"},
      {id:1, name:"Other"},
    ];
  
    this.basinList=[
      new Basin(1,"AML"),new Basin(2,"ASIA"),new Basin(3,"MENA"),new Basin(4,"OAT"),
      new Basin(5,"RCA")  
    ];
  
    this.geoUnitList=[
      new GeoUnit(1,"ABC"),new GeoUnit(2,"CAL"),new GeoUnit(3,"ECP"),
      new GeoUnit(4,"USL")  
    ];
  
    this.mgtCountryList=[
      new Country(1,"Angertina"),new Country(2,"Bolivia"),new Country(3,"Canada Land"),
      new Country(4,"Chile"),new Country(5,"Colombia"),new Country(6,"Ecuador"),
      new Country(7,"Paraguay"),new Country(8,"Peru"),new Country(9,"US Land California"),
      new Country(10,"US Land General"),new Country(11,"US Land South Texas"),
      new Country(12,"US Land Southeast"),new Country(13,"US Land West Texas"),
      new Country(14,"US Midcontinent"),new Country(15,"US Rockies") 
    ];
  
    this.fieldList=[
      {id:1, name:"Alvern"},
      {id:2, name:"Aries"},
      {id:3, name:"B-157C"},
      {id:4, name:"Bahregan"},
      {id:5, name:"Baram F"},
      {id:6, name:"Bedong"},
      {id:7, name:"Block 16.1"},
      {id:8, name:"Block 3E"},
      {id:9, name:"Central Azeri"},
      {id:10, name:"Cerro Granito"},
      {id:11, name:"CTOC"},
      {id:12, name:"Dholka"},
      {id:13, name:"Disraeli"},
      {id:14, name:"Douglas"},
      {id:15, name:"Dumbarton"},
      {id:16, name:"EDEN-YUTURI"},
      {id:17, name:"El Cordon"},
      {id:18, name:"ERINMI"},
      {id:19, name:"Gilbert"},
      {id:20, name:"Guince"},
      {id:21, name:"Highlander"},
      {id:22, name:"In Salah"},
      {id:23, name:"Jacuípe"},
      {id:24, name:"kang-2"},
      {id:25, name:"Kita Kuzuduka"},
      {id:26, name:"kito gre"},
      {id:27, name:"LD27-2"},
      {id:28, name:"Lianzi"},
      {id:29, name:"Likche"},
      {id:30, name:"Limborda"},
      {id:31, name:"MANGA"},
      {id:32, name:"Manzali"},
      {id:33, name:"Matapionche"},
      {id:34, name:"MAWN"},
      {id:35, name:"Max"},
      {id:36, name:"Mazeres"},
      {id:37, name:"MDRK"},
      {id:38, name:"Megionskoe"},
      {id:39, name:"Mekrang"},
      {id:40, name:"Meretoyakhinskoe"},
      {id:41, name:"Midfield"},
      {id:42, name:"Mocarroca"},
      {id:43, name:"Mort-98"},
      {id:44, name:"Muravlenkovskoe"},
      {id:45, name:"NEW COUNTRY"},
      {id:46, name:"Octopus"},
      {id:47, name:"Offshore"},
      {id:48, name:"PAKA SUR"},
      {id:49, name:"Pampa Sur"},
      {id:50, name:"Perevoznoe"},
      {id:51, name:"Pico Truncado"},
      {id:52, name:"PL 19-3A"},
      {id:53, name:"Pluto"},
      {id:54, name:"PRU KRATHIAM"},
      {id:55, name:"PRUDHOE BA"},
      {id:56, name:"RANQUILCO NORTE"},
      {id:57, name:"Rapak"},
      {id:58, name:"RED SEE"},
      {id:59, name:"San Martin"},
      {id:60, name:"San Tai"},
      {id:61, name:"SERRARIA"},
      {id:62, name:"South Dabaa 4"},
      {id:63, name:"Southern Gas Basin"},
      {id:64, name:"TEG-KRECHBA-REG"},
      {id:65, name:"Tetete"},
      {id:66, name:"TGT"},
      {id:67, name:"Turkmenoy"},
      {id:68, name:"Tyrihans"},
      {id:69, name:"Ubari (NC186)"},
      {id:70, name:"Viernes"},
      {id:71, name:"Villafortuna"},
      {id:72, name:"WRKM"}
    ];
  
    this.enviromentList=[
      new Enviroment(1,"Land"),new Enviroment(2,"Offshore Platform"),new Enviroment(3,"Offshore Subsea"),
      new Enviroment(5,"Offshore Shallow"),new Enviroment(4,"Swamp/inland Waters")
    ];
    this.PopulateWellData();    
  }
  //Customer data lists

  mdUnitList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  tvdUnitList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  stringTypeList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  threadList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  materialList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];
 
  // Completion lists
  completionStringTypeList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  completionThreadList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  completionMaterialList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  pumpingCompanyList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  toolsCompanyList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  screenProviderList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  fluidTypeList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  screenToolsTypeList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  toolsTypeList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  filterTypeList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  tubeTypeList:string[]=["list 1","list 2","list 3", 
  "list 4", "list 5","list 6","list 6","list 8", "list 9"];

  step = 0;
  
  filteredCustomers!:Observable<Customer[]>;
  filteredWells!:Observable<Well[]>;
  filteredAccounts!:Observable<SalesAccount[]>;
  filteredFields!:Observable<Field[]>;

  wellFormControl=new FormControl('');  
  wellTypeFormControl=new FormControl('');
  customerFormControl=new FormControl('');    
  accountFormControl=new FormControl('');
  countryFormControl=new FormControl('');
  basinFormControl=new FormControl('');
  fieldFormControl=new FormControl('');
  geoUnitFormControl=new FormControl('');
  enviromentFormControl=new FormControl('');
 

  ngOnInit(): void {      
    // Form controls for autocomplete behaivour
    this.filteredCustomers=this.customerFormControl.valueChanges.pipe(
      startWith(''), map(value=>this.FilterCustomers(value||''))
      );
    this.filteredWells=this.wellFormControl.valueChanges.pipe(
      startWith(''), map(value=>this.FilterWells(value||''))
      );
    this.filteredAccounts=this.accountFormControl.valueChanges.pipe(
      startWith(''), map(value=>this.FilterAccounts(value||''))
      );   
    this.filteredFields=this.fieldFormControl.valueChanges.pipe(
      startWith(''), map(value=>this.FilterFields(value||''))
      );               
  }

  //Filter functions for autocomplete behaviour
  private FilterCustomers(value:string):Customer[]{
    let searchValue=value.toLocaleLowerCase();
    return this.customerList.filter(option=>option.name.toLocaleLowerCase().includes(searchValue));
  }
  private FilterWells(value:string):Well[]{
    let searchValue=value.toLocaleLowerCase();
    return this.wellList.filter(option=>option.name.toLocaleLowerCase().includes(searchValue));
  }
  private FilterAccounts(value:string):SalesAccount[]{
    let searchValue=value.toLocaleLowerCase();
    return this.salesAccountList.filter(option=>option.name.toLocaleLowerCase().includes(searchValue));
  }   

  private FilterFields(value:string):Field[]{
    let searchValue=value.toLocaleLowerCase();
    return this.fieldList.filter(option=>option.name.toLocaleLowerCase().includes(searchValue));
  }  

  public PopulateCustomerData(){    
    this.wellFormControl.setValue(this.well.name);
    this.wellTypeFormControl.setValue(this.well.type.name);
    this.customerFormControl.setValue(this.well.customer.name);  
    this.accountFormControl.setValue(this.well.account.name);  
    this.countryFormControl.setValue(this.well.mgtCountry.name);  
    this.basinFormControl.setValue(this.well.basin.name);  
    this.fieldFormControl.setValue(this.well.field.name);  
    this.geoUnitFormControl.setValue(this.well.geoUnit.name);  
    this.enviromentFormControl.setValue(this.well.enviroment.name);     
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  public ClearCustomerData(){
    this.well=new Well(0,"");
    this.PopulateCustomerData();
  }

  private PopulateWellData(){
    for(let i=0; i<this.wellList.length ; i++){
      
        this.wellList[i].customer=this.customerList[i];    
        this.wellList[i].account=this.salesAccountList[i];       
        this.wellList[i].field=this.fieldList[i];
        this.wellList[i].geoUnit=this.geoUnitList[1];
        this.wellList[i].enviroment=this.enviromentList[1];  
        this.wellList[i].type=this.wellTypeList[1];  
        this.wellList[i].mgtCountry=this.mgtCountryList[1];
        this.wellList[i].basin=this.basinList[1];  
      }    
      this.wellList[71].customer=this.customerList[53];
      this.wellList[71].account=this.salesAccountList[53];
      this.wellList[71].field=this.fieldList[71];
      this.wellList[71].geoUnit=this.geoUnitList[1];
      this.wellList[71].enviroment=this.enviromentList[1];  
      this.wellList[71].type=this.wellTypeList[1];  
      this.wellList[71].mgtCountry=this.mgtCountryList[9];
      this.wellList[71].basin=this.basinList[1];   
  }

  public SaveCustomerData(){    
    /*
    alert(' well: ' + this.well.name + 
          ' welltype: ' + this.well.type.name +
          ' customer: ' + this.well.customer.name +
          ' account: ' + this.well.account.name +
          ' basin: ' + this.well.basin.name +
          ' geoUnit: ' + this.well.geoUnit.name +
          ' country: ' + this.well.mgtCountry.name +
          ' field: ' + this.well.field.name +
          ' enviroment: ' + this.well.enviroment.name           
          );
          */          
   
    this.trackRecord.well=this.well;    
    this.SendPopupNotification('The Trackrecord '+ this.trackRecord.id +' has been created');
    //this.router.navigate(['/track-record',this.trackRecord.id])     
    //this.router.navigate(['/record-list']);    
    this.isCustomerFinished=true; 
    this.nextStep();
  }

  public SaveWellDetailedData(){
    this.SendPopupNotification('The Well detailed data has been added to the record: '
          + this.trackRecord.id);     
    this.isWellFinished=true; 
    this.nextStep();
  }

  public SaveWellStemData(){
    this.SendPopupNotification('The Well stem data has been added to the record: '
          + this.trackRecord.id);    
    this.isWellStemFinished=true; 
    this.nextStep();
  }

  public SaveCompletionData(){
    this.SendPopupNotification('The Completion data has been added to the record: '
          + this.trackRecord.id); 
    this.isCompletionFinished=true; 
    this.nextStep();
  }

  public SaveSandControlData(){
    this.SendPopupNotification('The Sand control and pumping data have been added to the record: '
          + this.trackRecord.id); 
    this.isSandFinished=true; 
    this.nextStep();
  }

  public SaveToolsData(){
    this.SendPopupNotification('The tools and screen data have been added to the record: '
          + this.trackRecord.id); 
    this.isToolsFinished=true; 
    this.nextStep();
  }

  public SaveICDData(){
    this.SendPopupNotification('The ICD, APS and fluid data have been added to the record: '
          + this.trackRecord.id); 
    this.isICDFinished=true; 
    this.nextStep();
  }

  private SendPopupNotification(message:string){
    this.dialogRef.open(DialogViewComponent,{
      data:{
        message:message
      }
    }     
  );
  }

  private GetWell(name:string):Well{    
    const objWell=this.wellList.find(option => option.name === name);
    return objWell ? objWell : new Well(0,'');
  } 

  public SelectWellEvent(event:MatOptionSelectionChange, name:string){
    if(event.source.selected==true)
      this.PopulateCustomerData();
  }

  public OnChangeWellEvent(event:MatOptionSelectionChange, well:Well){
    if(event.source.selected==true){
      this.well=well;
      this.PopulateCustomerData();
    }       
  }
  public OnChangeWellTypeEvent(event:MatOptionSelectionChange,wellType:WellType){
    if(event.source.selected==true)
      this.well.type=wellType;
  }
  public OnChangeCustomerEvent(event:MatOptionSelectionChange,customer:Customer){
    if(event.source.selected==true)  
      this.well.customer=customer;
  }
  public OnChangeSalesAccountEvent(event:MatOptionSelectionChange,salesAccount:SalesAccount){
    if(event.source.selected==true)
      this.well.account=salesAccount;
  }
  public OnChangeBasinEvent(event:MatOptionSelectionChange,basin:Basin){
    if(event.source.selected==true)
      this.well.basin=basin;
  }
  public OnChangeGeoUnitEvent(event:MatOptionSelectionChange,geoUnit:GeoUnit){
    if(event.source.selected==true)
      this.well.geoUnit=geoUnit;
  }
  public OnChangeMgtCountryEvent(event:MatOptionSelectionChange,mgtCountry:Country){
    if(event.source.selected==true)
      this.well.mgtCountry=mgtCountry;
  }
  public OnChangeFieldEvent(event:MatOptionSelectionChange,field:Field){
    if(event.source.selected==true)
      this.well.field=field;
  }
  public OnChangeEnviromentEvent(event:MatOptionSelectionChange ,enviroment:Enviroment){
    if(event.source.selected==true)
      this.well.enviroment=enviroment;     
  }

}
