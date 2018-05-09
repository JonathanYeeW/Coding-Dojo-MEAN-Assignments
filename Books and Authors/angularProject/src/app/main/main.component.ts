import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  allAuthorArray: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){}

  ngOnInit() {
    this.getAllAuthors()
  }

  getAllAuthors(){
    console.log("## app.component.ts ## getAllAuthors ##")
    let observable = this._httpService.getAllAuthors()
    observable.subscribe(data => {
      console.log("We got the data!", data)
      this.allAuthorArray = data['authors']
    })
  }//End

  editTransition(passedAuthor){
    console.log("## app.component.ts ## editTransition ##")
    console.log(passedAuthor)
    let observable = this._httpService.editTransition(passedAuthor)
    this.goEdit()
  }

  goEdit(){
    this._router.navigate(['/edit'])
  }

  goCreate(){
    this._router.navigate(['/create'])
  }

  delete(object){
    console.log(object)
    this.deleteAuthorByID(object._id)
    this.getAllAuthors()
  }

  deleteAuthorByID(passedID){
    console.log("## app.component.ts ## deleteAuthorByID ##")
    console.log("the passedID is", passedID)
    let observable = this._httpService.deleteAuthorByID(passedID)
    observable.subscribe(data => {
      console.log("We go the data!", data)
      this.getAllAuthors()
    })
  }
}
