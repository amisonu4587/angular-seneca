import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder,FormArray} from '@angular/forms';
import { OwnerService } from '../owner.service';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  name = 'Angular';

  propertyForm: FormGroup;


  constructor(private fb:FormBuilder, private owner:OwnerService, private property:PropertyService, private router:Router) {

    this.propertyForm = this.fb.group({
      property_type: new FormControl('', Validators.required),
      property_id: new FormControl('', Validators.required),
      routine: new FormControl('', Validators.required),
      body_of_water: new FormControl('', Validators.required),
      foundation_designs_req: new FormControl('', Validators.required),
      permited_facilities: new FormControl('', Validators.required),


      expired_status: new FormControl('', Validators.required),
      inspection_due: new FormControl('', Validators.required),
      last_inspection: new FormControl('', Validators.required),
      variance: new FormControl('', Validators.required),
      property_record: new FormControl('', Validators.required),
      tax_id: new FormControl('', Validators.required),

      town: new FormControl('', Validators.required),
      address_number_911: new FormControl('', Validators.required),
      address_street_911: new FormControl('', Validators.required),
      address_city_911: new FormControl('', Validators.required),
      address_state_911: new FormControl('', Validators.required),
      address_zip_911: new FormControl('', Validators.required),

      owner_name: new FormControl(''),
      owner_id: new FormControl(''),
      owner_mail_address1: new FormControl(''),
      owner_mail_address2: new FormControl(''),
      owner_mail_address3: new FormControl(''),
      owner_email: new FormControl(''),
      owner_phone: new FormControl(''),
      owner_phone_extension: new FormControl(''),


      septic_system_type: new FormControl('', Validators.required),
      construction_date: new FormControl('', Validators.required),
      modification_date: new FormControl('', Validators.required),
      plan_on_file: new FormControl('', Validators.required),
      water_supply_type: new FormControl('', Validators.required),
      other_description: new FormControl('', Validators.required),
      distance_to_nearest_well: new FormControl('', Validators.required),
      // owner_phone_extension: new FormControl('', Validators.required),

      tanks: this.fb.array([]) ,
      notes: this.fb.array([]) ,
    });
  }



  tanks() : FormArray {
    return this.propertyForm.get("tanks") as FormArray
  }

  newTank(): FormGroup {
    return this.fb.group({
      tank_name: '',
       data_id: '',

    })
  }

  addTank() {
    this.tanks().push(this.newTank());
  }

  removeTank(i:number) {
    this.tanks().removeAt(i);
  }




  notes() : FormArray {
    return this.propertyForm.get("notes") as FormArray
  }

  newNote(): FormGroup {
    return this.fb.group({
      note: '',
      data_id: '',
    })
  }

  addNote() {
    this.notes().push(this.newNote());
  }

  removeNote(n:number) {
    this.notes().removeAt(n);
  }




    keyword = 'name';
    data: any;
    selectEvent(item:any) {
      // do something with selected item
       console.log(item.id);
       this.propertyForm.patchValue({
            owner_name: item.name,
            owner_id: item.id,
            owner_mail_address1: item.address1,
            owner_mail_address2: item.address2,
            owner_mail_address3: item.address3,
            owner_email: item.email,
            owner_phone: item.phone,
            owner_phone_extension: item.phone_extension
      });
    }

    onChangeSearch(val: string) {
      this.propertyForm.patchValue({
        owner_id: '',
        owner_name: val,
        owner_mail_address1: '',
        owner_mail_address2:'',
        owner_mail_address3:'',
        owner_email: '',
        owner_phone: '',
        owner_phone_extension: ''
      });
      // fetch remote data from here
      // And reassign the 'data' which is binded to 'data' property
    }

    onFocused(e:any){
      console.log(e);
      // do something when input is focused
    }

  ngOnInit(){
    this.tanks().push(this.newTank());

    this.notes().push(this.newNote());

    this.owner.getowner().subscribe((result:any)=>{
        this.data=result.data;
    })

  }

  dateChanged($event:any){
// console.log($event.target.value)
  }

  onSubmit(){
     this.property.saveproperty(this.propertyForm.value).subscribe((result)=>{
     this.propertyForm.reset({});
     this.router.navigate(['seneca/property']);
     })
   }

}
