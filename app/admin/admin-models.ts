export interface IRole {
    roleId: number;
    roleName: string;
    parentRoleId?: number;
}
export interface IRoleMenuItem {
    roleMenuId: number;
    roleId: number;
    menuId: number;
}
export interface IDescendentUsers {
    userId: number;
    organisationId?: number;
    branchId?: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    roleId: number;
    roleName: string;
}

export interface IAspNetUserMenuItems {
    userMenuId: number;
    userId: number;
    moduleId: number;
    menuId: number;
}

export interface INationality {
    nationalityId: number;
    nationality: string;
}

export interface IReligion {
    religionId: number;
    religion: string;
}

export interface ICasteCategory {
    castCategoryId: number;
    castCategory: string;
}

export interface IBranch {
      branchId: number;
      branchCode: string;
      branchName: string;
      branchAddress: string;
      phone: number;
      mobile: number;
      email: string;
      organisationId: number;
      status: boolean;
      createdBy: number;
      createdDate: string;
      modifiedBy: number;
      modifiedDate: string;
}

export interface IOrganisation {
    organisationId: number;
    organisationName: string;
    address: string;
    phone: string;
    mobile: string;
    email: string;
    logo: string;
}