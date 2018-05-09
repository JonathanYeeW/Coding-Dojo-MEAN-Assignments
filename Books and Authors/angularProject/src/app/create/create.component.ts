import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newAuthor: any;
  error: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){}

  ngOnInit() {
    this.newAuthor = {firstName: "", lastName: ""}
  }

  createAuthor(){
    console.log("## app.component.ts ## createAuthor ##")
    let observable = this._httpService.createAuthor(this.newAuthor)
    observable.subscribe(data => {
      this.error = ""
      console.log("We go the data!", data)
      if(data['error']){
        this.error = data['error'].message
      } else {
        this.goMain()
      }
    })
  }//End

  goMain(){
    this._router.navigate(['/main'])
  }

  goEdit(){
    this._router.navigate(['/edit'])
  }

}
