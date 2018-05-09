import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ){}

  editAuthor: any;
  theUpdate: any;
  error: any;
    
  ngOnInit() {
    // this.editAuthor = {firstName: "", lastName:""}
    this.editAuthorInit()
    this.theUpdate = {firstName: "", lastName: ""}
  }//End

  editAuthorInit(){
    console.log("## edit.component.ts ## editAuthorInit ##")
    this.editAuthor = this._httpService.editAuthorInit()
    console.log("BELOW THERE SHOULD BE AN OBJECT ============")
    console.log(this.editAuthor)
  }//End

  updateAuthorByID(){
    console.log("## app.component.ts ## updateAuthorByID ##")
    console.log("the editAuthor ID is", this.editAuthor._id)
    console.log(this.theUpdate)
    if(this.theUpdate.firstName == "" || this.theUpdate.lastName == "" ){
      this.error = "Please Fill Out Both First and Last Name"
    } else {
      let observable = this._httpService.updateAuthorByID(this.editAuthor._id, this.theUpdate)
      observable.subscribe(data => {
        console.log("We go the data!", data)
        this.goHome()
      })

    }
  }//End

  goHome(){
    this._router.navigate(['/main'])
  }
}//End Class
