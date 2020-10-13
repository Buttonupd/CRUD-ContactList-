import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from './contact';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  //retrieving contacts

  getContacts(){
    return this.http.get("http://localhost:3000/api/contacts")
      .pipe(map(data=>{})).subscribe(result=>{
        console.log(result);
        
      });  
  }
  //add contact
  addContact(newContact){
    var headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact,{headers:headers})
      .pipe(map(data => {})).subscribe(result => {
        console.log(result);       
      });     
  }
  //delete contact
  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contact' + id)
      .pipe(map(data => {})).subscribe(result => {
        console.log(result);      
      });
  }
}
