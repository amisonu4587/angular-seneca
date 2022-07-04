import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor(private property:PropertyService) { }

  collection: any;
  ngOnInit(): void {
    this.property.getproperty().subscribe((result:any)=>{
      // console.log(result.data)
    this.collection=result.data;
    })
  }

  deleteProperty(item:any){

      this.property.deleteproperty(item).subscribe((result)=>{
      this.ngOnInit();
      })


  }


}



