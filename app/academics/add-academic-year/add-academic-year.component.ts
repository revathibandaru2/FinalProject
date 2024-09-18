import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { IAcademics } from '../academics-models';
import { IBranch } from 'src/app/admin/admin-models';

@Component({
  selector: 'app-add-academic-year',
  templateUrl: './add-academic-year.component.html',
  styleUrls: ['./add-academic-year.component.css']
})
export class AddAcademicYearComponent implements OnInit{
  isLoading = false;
  academicsFormGroup!: FormGroup;
  submitted = false;
  isEdit = false;

  academics = [] as IAcademics[];
  academic = {} as IAcademics;


  constructor(private _formBuilder: FormBuilder, private _http: HttpService) {

  }

  ngOnInit(): void {
    this.academicsFormGroup = this._formBuilder.group({
      academicYearId: [0],
      academicYearName: [null, Validators.required],
      startMonth: [null, Validators.required],
      monthsTenure: [null, Validators.required],
      q1month: [null, Validators.required],
      q2month: [null, Validators.required],
      q3month: [null, Validators.required],
      q4month: [null, Validators.required],
      h1month: [null, Validators.required],
      h2month: [null, Validators.required],
      paymentDueDate: [null, Validators.required],
      isCurrent: [true],
      branchId: [0],
      status: [true],
      createdBy: [0],
      createdDate: [null],
      modifiedBy: [null],
      modifiedDate: [null]
    })
    this.loadAcademicYears();
  }


  public get f() {
    return this.academicsFormGroup.controls;
  }

  public createAcademicYear(fg: FormGroup) {
    this.submitted = true;
    this.isLoading = true;
    this.academic = fg.value;
    this.academic.branchId = parseInt(sessionStorage.getItem("branchId") as string);
    this.academic.createdBy = parseInt(sessionStorage.getItem("userId") as string);
    if (this.academicsFormGroup.invalid) {
      this.isLoading = false;
      return;
    }

    if (this.isEdit == false) {
      console.log(this.academic);
      this.academic.createdDate=null;
      // this.academic.startMonth=new Date(this.academic.startMonth).toLocaleDateString();
      // this.academic.q1month=new Date(this.academic.q1month).toLocaleDateString();
      // this.academic.q2month=new Date(this.academic.q2month).toLocaleDateString();
      // this.academic.q3month=new Date(this.academic.q3month).toLocaleDateString();
      // this.academic.q4month=new Date(this.academic.q4month).toLocaleDateString();
      // this.academic.h1month=new Date(this.academic.h1month).toLocaleDateString();
      // this.academic.h2month=new Date(this.academic.h2month).toLocaleDateString();

      this.academic['academicYearId'] =0;
      this._http.postData("api/AcademicYear/add-academicYear", this.academic).subscribe({
        next: (data: any) => {
          console.log(data.data);
          Swal.fire({ "text": data.message, icon: 'success', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, confirmButtonText: 'Ok Great Job!', focusConfirm: false });
          this.academicsFormGroup.reset();
          this.loadAcademicYears();
        },
        error: reason => {
          Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
        }
      });
    }
    else {
      this._http.postData("api/AcademicYear/update-academicYear", fg.value).subscribe({
        next: (data: any) => {
          console.log(data.data);
          Swal.fire({ "text": data.message, icon: 'success', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, confirmButtonText: 'Ok Great Job!', focusConfirm: false });
          this.academicsFormGroup.reset();
          this.isEdit = false;
          this.loadAcademicYears();
        },
        error: reason => {
          Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
        }
      })
    }
    this.submitted = false;
    this.isLoading = false;
  }

  public loadAcademicYears() {
    this._http.getData("api/AcademicYear/get-academicYear").subscribe({
      next: (data: any) => {
        this.academics = data.data;
      },
      error: reason => {
        Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
      }
    });
  }

  public editAcademicYear(aca: IAcademics) {
    this.academicsFormGroup.patchValue(aca);
    this.isEdit = true;
  }
}
