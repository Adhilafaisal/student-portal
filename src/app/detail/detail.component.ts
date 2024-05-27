import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
 sid:any="";
 stud:any={}
 dd =new Date()
 students:any =[]

  constructor(private ar: ActivatedRoute,private ds:DataService) {
    this.students=this.ds.students
    this.ar.params.subscribe((res) =>{
      this.sid = res['id'];
      this.stud = this.students.find((item:any) => item.id == this.sid)
      console.log(this.stud)
    })
      
    
  }
}
