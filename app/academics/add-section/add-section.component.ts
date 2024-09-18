import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { IClasses, ISections } from '../academics-models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {
  isLoading = false;
  sectionFormGroup!: FormGroup;
  submitted = false;
  isEdit = false;

  sections = [] as ISections[];
  section = {} as ISections;

  classes = [] as IClasses[];

  constructor(private _formBuilder: FormBuilder, private _http: HttpService) {

  }

  ngOnInit(): void {
    this.sectionFormGroup = this._formBuilder.group({
      sectionId: [0],
      classId: [0],
      sectionName: [null, Validators.required],
      strength: [null, Validators.required],
      roomNumber: [null, Validators.required],
      sectionTeacherId: [null],
      branchId: [0],
      status: [true],
      createdBy: [0],
      createdDate: [null],
      modifiedBy: [null],
      modifiedDate: [null]
    })

    this.loadClasses();
  }


  public get f() {
    return this.sectionFormGroup.controls;
  }

  public createSection(fg: FormGroup) {
    this.submitted = true;
    this.isLoading = true;
    this.section = fg.value;
    this.section.branchId = parseInt(sessionStorage.getItem("branchId") as string);
    this.section.createdBy = parseInt(sessionStorage.getItem("userId") as string);
    if (this.sectionFormGroup.invalid) {
      this.isLoading = false;
      return;
    }

    if (this.isEdit == false) {
      this.section['sectionId']=0;
      this._http.postData("api/Sections/Add-section", this.section).subscribe({
        next: (data: any) => {
          console.log(data.data);
          Swal.fire({ "text": data.message, icon: 'success', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, confirmButtonText: 'Ok Great Job!', focusConfirm: false });
          this.sectionFormGroup.reset();
        },
        error: reason => {
          Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
        }
      });
    }
    else {
      this._http.postData("api/Sections/update-section", fg.value).subscribe({
        next: (data: any) => {
          console.log(data.data);
          Swal.fire({ "text": data.message, icon: 'success', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, confirmButtonText: 'Ok Great Job!', focusConfirm: false });
          this.sectionFormGroup.reset();
          this.isEdit = false;
        },
        error: reason => {
          Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
        }
      })
    }
    this.submitted = false;
    this.isLoading = false;
  }

  public loadSections(event:any) {
    this._http.getData("api/Sections/get-sections-by-class?classId="+event.target.value).subscribe({
      next: (data: any) => {
        this.sections = data.data;
      },
      error: reason => {
        Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
      }
    });
  }

  public loadClasses() {
    this._http.getData("api/Classes/get-ClassMaster").subscribe({
      next: (data: any) => {
        this.classes = data.data;
      },
      error: reason => {
        Swal.fire({ "text": reason, icon: 'error', allowOutsideClick: false, allowEscapeKey: false, buttonsStyling: true, showCancelButton: true, cancelButtonText: 'Ok let me check', cancelButtonColor: 'marron', showConfirmButton: false });
      }
    });
  }

  public editSection(sec: ISections) {
    this.sectionFormGroup.patchValue(sec);
    this.isEdit = true;
  }
}
