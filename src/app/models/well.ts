import { Basin } from "./basin";
import { Country } from "./country";
import { Customer } from "./customer";
import { Enviroment } from "./enviroment";
import { Field } from "./field";
import { GeoUnit } from "./geo-unit";
import { SalesAccount } from "./sales-account";
import { WellType } from "./well-type";

export class Well {
    public id:number;
    public name:string;
    public type:WellType=new WellType(0,"");
    public customer:Customer=new Customer(0,""); 
    public account:SalesAccount=new SalesAccount(0,"");
    public mgtCountry:Country=new Country(0,"");
    public basin:Basin=new Basin(0,"");    
    public field:Field=new Field(0,"");    
    public enviroment:Enviroment=new Enviroment(0,"");    
    public geoUnit: GeoUnit=new GeoUnit(0,"");

    public constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }
    
}
