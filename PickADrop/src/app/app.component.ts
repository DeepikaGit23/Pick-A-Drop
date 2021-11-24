import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PickADrop';

  constructor(private toastr: ToastrService){}

  fun1(){
    console.log("Inside function");
    this.toastr.error('hey there','oops',{

      // timeOut:500,
      positionClass: 'toast-bottom-center',
      progressBar:false
    }

    )}
}
