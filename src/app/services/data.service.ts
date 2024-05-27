import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  students = [
    {id:1,sname: 'John', age: 20,class:"Bsc",phone:1234567890,email:"john@example.com",fee:12000 },
    {id:2,sname: 'Jane', age: 22,class:"BCA",phone:1234567690,email:"jane@example.com",fee:20000 },
    {id:3,sname: 'Bob', age: 25, class:"Bsc",phone:1234565890,email:"bob@example.com",fee:12000 },
    {id:4,sname: 'Alice', age: 24,class:"BCA",phone:1234567890,email:"alice@example.com",fee:20000 },
    {id:5,sname: 'Tom', age: 21,class:"BCA",phone:1234567890,email:"tom@example.com",fee:20000 }
  ]
}
