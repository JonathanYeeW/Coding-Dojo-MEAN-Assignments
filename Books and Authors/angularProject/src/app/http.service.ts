import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  
  editTransitionObject: any;

  constructor(private _http: HttpClient) {
    console.log("## http.service.ts ## constructor ##")
    console.log("## http.service.ts ## ##")
   }//End

   
   getAllAuthors(){
     console.log("## http.service.ts ## getAllAuthors ##")
     return this._http.get('/authors')
   }//End

   getAuthorByID(passedID){
      console.log("## http.service.ts ## getAuthorByID ##")
      return this._http.get('/authors/'+passedID)
   }//End

   createAuthor(passedAuthor){
    console.log("## http.service.ts ## createAuthor ##") 
    return this._http.post('/authors', passedAuthor)
   }

   updateAuthorByID(passedID, theUpdate){
    console.log("## http.service.ts ## updateAuthorByID ##")
    return this._http.put('/authors/'+passedID, theUpdate)
   }//End

   deleteAuthorByID(passedID){
    console.log("## http.service.ts ## deleteAuthorByID ##")
    return this._http.delete('/authors/'+passedID)
   }//End

   deleteAllAuthors(){
    console.log("## http.service.ts ## deleteAllAuthors ##")
    return this._http.delete('/deleteAll')
   }

   editTransition(passedAuthor){
     console.log("## http.service.ts ## editTransition ##")
     this.editTransitionObject = passedAuthor;
     console.log("editTransitionObject is: ", this.editTransitionObject)
   }

   editAuthorInit(){
     console.log("## http.service.ts ## editAuthorInit ##")
     return this.editTransitionObject
   }
}//End Class
