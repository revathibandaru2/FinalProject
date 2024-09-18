export interface IClassTypes{
  classTypeId: number;
  classTypeName: string;
}

export interface IClasses{
  classId: number;
  className: string;
  branchId: number;
  classTypeId: number;
  status: boolean;
  createdBy: number;
  createdDate: string;
  modifiedBy: number;
  modifiedDate: string;
  isChecked?:boolean;
  sectionsDetails?: ISectionDetails [];
}

export interface ISectionDetails {
  sectionId: number;
  sectionName: string;
  strength?: number;
  roomNumber?: number;
  teacherName?: number;
  classId: number;
}

export interface ISections{
  sectionId: number;
  classId: number;
  sectionName: string;
  strength: number;
  roomNumber: number;
  sectionTeacherId: number;
  branchId: number;
  status: boolean;
  createdBy: number;
  createdDate: string;
  modifiedBy: number;
  modifiedDate: string;
}

export interface IAcademics{
      academicYearId: number;
      academicYearName: string;
      startMonth: string;
      monthsTenure: number;
      q1month: string;
      q2month: string;
      q3month: string;
      q4month: string;
      h1month: string;
      h2month: string;
      paymentDueDate: string;
      isCurrent: boolean;
      branchId: number;
      status: boolean;
      createdBy: number;
      createdDate: string|null;
      modifiedBy: string;
      modifiedDate: string;
}


