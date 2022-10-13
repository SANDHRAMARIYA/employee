import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor() { }

  employeecode=""

  readValues=()=>{
    let data={
      "employeecode":this.employeecode
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
