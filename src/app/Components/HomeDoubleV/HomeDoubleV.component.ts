import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-homedoublev',
  templateUrl: './homeDoublev.component.html',
  styleUrls: ['./homedoublev.component.css']
})
export class HomeDoubleVComponent implements OnInit {

  isAddPerson: boolean = false
  isAddUser: boolean = false
  constructor() { }

  ngOnInit() {
  }

  intoComponent(e: string){
    if(e == 'person'){
      this.isAddPerson = true;
    }
    if(e == 'user'){
      this.isAddUser = true;
    }
  }

  exitComponent(e: any){
    if(!e.person){
      this.isAddPerson = false;
    }
    if(!e.user){
      this.isAddUser = false;
    }
  }
}
