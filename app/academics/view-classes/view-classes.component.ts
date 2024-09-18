import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { IClasses } from '../academics-models';

@Component({
  selector: 'app-view-classes',
  templateUrl: './view-classes.component.html',
  styleUrls: ['./view-classes.component.css']
})
export class ViewClassesComponent implements OnInit {
  isLoading = false;
  viewFormGroup!: FormGroup;
  submitted = false;
  isEdit = false;

  classes = [] as IClasses[];


  constructor(private _formBuilder: FormBuilder, private _http: HttpService) {

  }

  ngOnInit(): void {
    this.viewFormGroup = this._formBuilder.group({
    })

    this.loadClasses();
  }


  public get f() {
    return this.viewFormGroup.controls;
  }

  public loadClasses() {
    this._http.getData("api/Classes/get-classes-details").subscribe({
      next: (data: any) => {
        this.classes = data.data;
      },
      error: reason => {
        Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
      }
    });
  }

}
