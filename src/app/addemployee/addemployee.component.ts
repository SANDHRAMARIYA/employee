import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }


  employeecode=""
  employee=""
  gender=""
  Pincode=""
  designation=""
  company=""
  companyaddress=""
  email=""
  salary=""
  Phnum=""
  experience=""
  blood=""
  DOB=""



  readValues=()=>{
    let data = {
      "employeecode":this.employeecode,
      "employee":this.employee,
      "gender":this.gender,
"Pincode":this.Pincode,
      "designation":this.designation,
      "company":this.company,
      "companyaddress":this.companyaddress,
      "email":this.email,
      "salary":this.salary,
      "Phnum":this.Phnum,
      "experience":this.experience,
      "blood":this.blood,
      "DOB":this.DOB
    }
    console.log(data)
  }




  ngOnInit(): void {
  }

}
