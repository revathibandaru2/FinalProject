import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { IClassTypes } from '../academics-models';

@Component({
  selector: 'app-add-class-type',
  templateUrl: './add-class-type.component.html',
  styleUrls: ['./add-class-type.component.css']
})
export class AddClassTypeComponent implements OnInit {
  isLoading = false;
  classTypeFormGroup!: FormGroup;
  submitted = false;
  isEdit = false;

  classTypes = [] as IClassTypes[];

  constructor(private _formBuilder: FormBuilder, private _http: HttpService) {

  }

  ngOnInit(): void {
    this.classTypeFormGroup = this._formBuilder.group({
      classTypeId: [0],
      classTypeName: [null, Validators.required]
    })

    this.loadClassTypes();
  }


  public get f() {
    return this.classTypeFormGroup.controls;
  }

  public createClassType(fg: FormGroup) {
    this.submitted = true;
    this.isLoading = true;
    if (this.classTypeFormGroup.invalid) {
      this.isLoading = false;
      return;
    }

    if (this.isEdit == false) {
      this.classTypeFormGroup.controls['classTypeId'].setValue(0);
      this._http.postData("api/ClassType/Add-classTypeMaster", fg.value).subscribe({
        next: (data: any) => {
          console.log(data.data);
          Swal.fire({ "text": data.message, icon: 'success', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, confirmButtonText: 'Ok Great Job!', focusConfirm: false });
          this.classTypeFormGroup.reset();
          this.loadClassTypes();
        },
        error: reason => {
          Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
        }
      });
    }
    else {
      this._http.postData("api/ClassType/update-classTypeMaster", fg.value).subscribe({
        next: (data: any) => {
          console.log(data.data);
          Swal.fire({ "text": data.message, icon: 'success', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, confirmButtonText: 'Ok Great Job!', focusConfirm: false });
          this.classTypeFormGroup.reset();
          this.isEdit = false;
          this.loadClassTypes();
        },
        error: reason => {
          Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
        }
      })
    }
    this.submitted = false;
    this.isLoading = false;
  }

  public loadClassTypes() {
    this._http.getData("api/ClassType/get-classTypeMaster").subscribe({
      next: (data: any) => {
        this.classTypes = data.data;
      },
      error: reason => {
        Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
      }
    });
  }

  public editClassType(ct: IClassTypes) {
    this.classTypeFormGroup.patchValue(ct);
    this.isEdit = true;
  }
}
