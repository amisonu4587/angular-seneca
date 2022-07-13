import { PropertyData } from './../model/property.model';
import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import {FormControl,FormGroup,Validators,FormBuilder,FormArray} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { OwnerService } from '../owner.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {
  propertyForm: FormGroup;

  public propertyData : PropertyData;

  pID:number;

  constructor(private property:PropertyService, private router: ActivatedRoute, private fb:FormBuilder, private owner:OwnerService) {

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


  ngOnInit(): void {
    // this.tanks().push(this.newTank());
    this.pID = this.router.snapshot.params['id'];
    this.notes().push(this.newNote());

    this.owner.getowner().subscribe((result:any)=>{
        this.data = result.data;
    })

    //this.property.getcurrrentProperty(this.pID).subscribe((res:PropertyData)=>console.log(res.data));

    const properties$ = this.property.getcurrrentProperty(this.pID).pipe(
      map((res):PropertyData => {
        this.propertyData = new PropertyData();
        this.propertyData.id = res.data.id;
        return this.propertyData;
      })
    );

    properties$.subscribe(res=>console.log(res));


    this.property.getcurrrentProperty(this.pID).subscribe((res:any)=>{
          //this.tanks().push(this.newTank());
          // const fields=res.data[0].note;
          // console.log(fields);


          this.propertyForm = this.fb.group({
          property_type: new FormControl(res.data[0].property_type),
          property_id: new FormControl(res.data[0].property_id),
          routine: new FormControl(res.data[0].routine),
          body_of_water: new FormControl(res.data[0].body_of_water),
          foundation_designs_req: new FormControl(res.data[0].foundation_designs_req),
          permited_facilities: new FormControl(res.data[0].permited_facilities),


          expired_status: new FormControl(res.data[0].expired_status),
          inspection_due: new FormControl(res.data[0].inspection_due),
          last_inspection: new FormControl(res.data[0].last_inspection),
          variance: new FormControl(res.data[0].variance),
          property_record: new FormControl(res.data[0].property_record),
          tax_id: new FormControl(res.data[0].tax_id),

          town: new FormControl(res.data[0].town),
          address_number_911: new FormControl(res.data[0].address_number_911),
          address_street_911: new FormControl(res.data[0].address_street_911),
          address_city_911: new FormControl(res.data[0].address_city_911),
          address_state_911: new FormControl(res.data[0].address_state_911),
          address_zip_911: new FormControl(res.data[0].address_zip_911),

          owner_name: new FormControl(res.data[0].owner.name),
          keyword : res.data[0].owner.owner_name,
          owner_id: new FormControl(res.data[0].owner_id),
          owner_mail_address1: new FormControl(res.data[0].owner.address1),
          owner_mail_address2: new FormControl(res.data[0].owner.address2),
          owner_mail_address3: new FormControl(res.data[0].owner.address3),
          owner_email: new FormControl(res.data[0].owner.email),
          owner_phone: new FormControl(res.data[0].owner.phone),
          owner_phone_extension: new FormControl(res.data[0].owner.phone_extension),


          septic_system_type: new FormControl(res.data[0].septic_system_type),
          construction_date: new FormControl(res.data[0].construction_date),
          modification_date: new FormControl(res.data[0].modification_date),
          plan_on_file: new FormControl(res.data[0].plan_on_file),
          water_supply_type: new FormControl(res.data[0].water_supply_type),
          other_description: new FormControl(res.data[0].other_description),
          distance_to_nearest_well: new FormControl(res.data[0].distance_to_nearest_well),
          // owner_phone_extension: new FormControl(),

          tanks: this.fb.array([]) ,
          notes: this.fb.array([]) ,
      });
      this.setDefaultData(res.data[0].tank);

    })





  }

  setDefaultData(data:any){
   console.log(data);
  }

  employeeSkills(data: any): FormArray {
    return this.tanks()
      .at(data)
      .get('tank_name') as FormArray;
  }




  dateChanged($event:any){
    // console.log($event.target.value)
      }


  // onSubmit(){
  //   console.log('fghg');
  // }

  collection(){

    this.property.updateCurrentProperty(this.router.snapshot.params['id'],this.propertyForm.value).subscribe((result)=>{
    console.log(result);
    })
  }

}
