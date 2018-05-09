import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hello World, Im Jonathans App';
  //Variables
  newAuthor: any;
  allAuthorArray: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){}
  
  ngOnInit(){
    this.goMain()
  }//End

  goMain(){
    this._router.navigate(['/main'])
  }

  // getAllAuthors(){
  //   console.log("## app.component.ts ## getAllAuthors ##")
  //   let observable = this._httpService.getAllAuthors()
  //   observable.subscribe(data => {
  //     console.log("We got the data!", data)
  //     this.allAuthorArray = data['authors']
  //     this.allAuthorArray
  //   })
  // }//End

  // getAuthorByID(passedID){
  //   console.log("## app.component.ts ## getAuthorByID ##")
  //   console.log("the passedID is", passedID)
  //   let observable = this._httpService.getAuthorByID(passedID)
  //   observable.subscribe(data => {
  //     console.log("We go the data!", data)
  //   })
  // }//End

  // createAuthor(){
  //   console.log("## app.component.ts ## createAuthor ##")
  //   let observable = this._httpService.createAuthor(this.newAuthor)
  //   observable.subscribe(data => {
  //     console.log("We go the data!", data)
  //     this.getAllAuthors()
  //   })
  // }//End

  // updateAuthorByID(passedID, passedUser){
  //   console.log("## app.component.ts ## updateAuthorByID ##")
  //   console.log("the passedID is", passedID)
  //   let observable = this._httpService.updateAuthorByID(passedID, passedUser)
  //   observable.subscribe(data => {
  //     console.log("We go the data!", data)
  //   })
  // }//End

  // deleteAuthorByID(passedID){
  //   console.log("## app.component.ts ## deleteAuthorByID ##")
  //   console.log("the passedID is", passedID)
  //   let observable = this._httpService.deleteAuthorByID(passedID)
  //   observable.subscribe(data => {
  //     console.log("We go the data!", data)
  //     this.getAllAuthors()
  //   })
  // }

  // deleteAllAuthors(){
  //   console.log("## app.component.ts ## deleteAllAuthors ##")
  //   let observable = this._httpService.deleteAllAuthors()
  //   observable.subscribe(data => {
  //     console.log("We go the data!", data)
  //   })
  // }

  // editTransition(passedAuthor){
  //   console.log("## app.component.ts ## editTransition ##")
  //   console.log(passedAuthor)
  //   let observable = this._httpService.editTransition(passedAuthor)
  // }
}//End Class
