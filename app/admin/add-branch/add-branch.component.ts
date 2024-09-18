import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { IBranch } from '../admin-models';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit{
  isLoading = false;
  branchFormGroup!: FormGroup;
  submitted = false;
  isEdit = false;

  branches = [] as IBranch[];
  branch={} as IBranch;

  constructor(private _formBuilder: FormBuilder, private _http: HttpService) {

  }

  ngOnInit(): void {
    this.branchFormGroup = this._formBuilder.group({
      branchId: [0],
      branchCode: [null, Validators.required],
      branchName: [null, Validators.required],
      branchAddress: [null, Validators.required],
      phone: [null],
      mobile: [null, Validators.required],
      email: [null, Validators.required],
      organisationId: [null],
      status: [true],
      createdBy: [0],
      createdDate: [null],
      modifiedBy: [null],
      modifiedDate: [null]
    })

    this.loadBranches();
  }


  public get f() {
    return this.branchFormGroup.controls;
  }

  public createBranch(fg: FormGroup) {
    this.submitted = true;
    this.isLoading = true;
    this.branch = fg.value;
    this.branch.organisationId = parseInt(sessionStorage.getItem("orgId") as string)
    this.branch.createdBy = parseInt(sessionStorage.getItem("üserId") as string);
    if (this.branchFormGroup.invalid) {
      this.isLoading = false;
      return;
    }

    if (this.isEdit == false) {

    console.log(this.branch);
      
      this.branchFormGroup.controls['branchId'].setValue(0);
      this._http.postData("api/Branch/add-branch", this.branch).subscribe({
        next: (data: any) => {
          console.log(data.data);
          Swal.fire({ "text": data.message, icon: 'success', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, confirmButtonText: 'Ok Great Job!', focusConfirm: false });
          this.branchFormGroup.reset();
          this.loadBranches();
        },
        error: reason => {
          Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
        }
      });
    }
    else {
      this._http.postData("api/Branch/update-branch", fg.value).subscribe({
        next: (data: any) => {
          console.log(data.data);
          Swal.fire({ "text": data.message, icon: 'success', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, confirmButtonText: 'Ok Great Job!', focusConfirm: false });
          this.branchFormGroup.reset();
          this.isEdit = false;
          this.loadBranches();
        },
        error: reason => {
          Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
        }
      })
    }
    this.submitted = false;
    this.isLoading = false;
  }

  public loadBranches() {
    this._http.getData("api/Branch/get-branch").subscribe({
      next: (data: any) => {
        this.branches = data.data;
      },
      error: reason => {
        Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
      }
    });
  }

  public editBranch(b: IBranch) {
    this.branchFormGroup.patchValue(b);
    this.isEdit = true;
  }
}
