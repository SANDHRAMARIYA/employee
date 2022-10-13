import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }


  CODE=""
  NAME=""
  GENDER=""
  Pincode=""
  Designation=""
  COMPANY=""
  COMPANYADDRESS=""
  EMAIL=""
  SALARY=""
  PHNUM=""
  EXPERIENCE=""
  BLOOD=""
  DOB=""



  readValues=()=>{
    let data = {
      "CODE":this.CODE,
      "NAME":this.NAME,
      "GENDER":this.Pincode,
      "Designation":this.Designation,
      "COMPANY":this.COMPANY,
      "COMPANYADDRESS":this.COMPANYADDRESS,
      "EMAIL":this.EMAIL,
      "SALARY":this.SALARY,
      "PHNUM":this.PHNUM,
      "EXPERIENCE":this.EXPERIENCE,
      "BLOOD":this.BLOOD,
      "DOB":this.DOB
    }
    console.log(data)
  }




  ngOnInit(): void {
  }

}
