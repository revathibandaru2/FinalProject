import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { IClassTypes, IClasses } from '../academics-models';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  isLoading = false;
  classFormGroup!: FormGroup;
  submitted = false;
  isEdit = false;

  classes = [] as IClasses[];
  class = {} as IClasses;

  classTypes = [] as IClassTypes[];

  constructor(private _formBuilder: FormBuilder, private _http: HttpService) {

  }

  ngOnInit(): void {
    
    // this.loadClasses();
    this.createForm();
    this.loadClassTypes();
  }

  private createForm(){
    this.classFormGroup = this._formBuilder.group({
      classId: [0],
      className: [null, Validators.required],
      branchId: [0],
      classTypeId: [null, Validators.required],
      status:  this._formBuilder.control(true),
      createdBy: [0],
      createdDate: [null],
      modifiedBy: [null],
      modifiedDate: [null]
    })
  }

  public get f() {
    return this.classFormGroup.controls;
  }

  public createClass(fg: FormGroup) {
    this.submitted = true;
    this.isLoading = true;
    this.class = fg.value;
    this.class.branchId = parseInt(sessionStorage.getItem("branchId") as string);
    this.class.createdBy = parseInt(sessionStorage.getItem("userId") as string);
    if (this.classFormGroup.invalid) {
      this.isLoading = false;
      return;
    }

    if (this.isEdit == false) {
      this.class['classId'] =0;
      this._http.postData("api/Classes/Add-classMaster", this.class).subscribe({
        next: (data: any) => {
          console.log(data.data);
          Swal.fire({ "text": data.message, icon: 'success', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, confirmButtonText: 'Ok Great Job!', focusConfirm: false });
          this.classFormGroup.reset();
          // this.loadClasses();
        },
        error: reason => {
          Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
        }
      });
    }
    else {
      this._http.postData("api/Classes/update-classMaster", fg.value).subscribe({
        next: (data: any) => {
          console.log(data.data);
          Swal.fire({ "text": data.message, icon: 'success', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, confirmButtonText: 'Ok Great Job!', focusConfirm: false });
          this.classFormGroup.reset();
          this.isEdit = false;
          // this.loadClasses();
        },
        error: reason => {
          Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
        }
      })
    }
    this.submitted = false;
    this.isLoading = false;
  }

  public loadClasses(event: any) {
    this._http.getData("api/Classes/get-ClassMaster-by-classType?classTypeId="+event.target.value).subscribe({
      next: (data: any) => {
        this.classes = data.data;
      },
      error: reason => {
        Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
      }
    });
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

  public editClass(cla: IClasses) {
    this.classFormGroup.patchValue(cla);
    this.isEdit = true;
  }
}
