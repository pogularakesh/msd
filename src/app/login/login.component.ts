import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trasferService } from '../services/trasfer.service';
import { register } from '../model/task';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:register
  constructor(private lgs:trasferService,private rt:Router) { 
    this.user=new register()
  }
  loginform(uid, pwd, frm) {
    if (frm.valid) {
      let u = uid.value
      let p = pwd.value
     // alert(u+'/'+p)
      this.lgs.GetDetails(u, p).subscribe((data) => {
        console.log(data)
        if (data.length >0) {
          alert('Login Sucess')
          localStorage.setItem('userid', u)
        this.rt.navigate(['changepassword'])
        }
        else
          alert('Invalid User');
      })
    }
    else {
      alert('Enter User Credentials')
    }
  }
  ngOnInit() {
  }

}