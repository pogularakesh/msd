import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { trasferService } from '../services/trasfer.service';
import { register } from '../model/task';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  ch: register
  lgs;
 
  constructor(private service:trasferService,private router:Router) {
    this.ch = new register();
  }

  ngOnInit() {
  }

  Submit1(password: any) {
    let a = localStorage.getItem("userid");
     this.ch.userid = a;
    // alert(this.ch.username)

    this.service.SubmitClick1(password.value,a).subscribe((data) => { 
      console.log(data)
      if (data.length == 1) { 

    

        alert('valid')
        // alert(this.ch.username)

        if (a = undefined) {
          alert("no value")
        } else {
          this.lgs = true;
        }
      }
      else {
        alert('invalid login')
      }

    })
  }
  update() {

    let a = localStorage.getItem("userid");
    this.ch.userid = a;
    // alert(JSON.stringify(this.ch))
    this.service.UpdatePassword(this.ch).subscribe((data) => {
      //  localStorage.setItem('email',un.value);
      alert("Updated successfully")
      this.router.navigate(['home'])
    }
    )
  }

}


