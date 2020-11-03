type ApplicationModel = {
    id?: string;
    organization?: string;
    name?: string;
    isDeleted?: boolean | number;
    apikey?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

type ApplicationsModel = ApplicationModel[]

type OrganizationModel = {
    id?: string;
}

type OrganizationsModel = OrganizationModel[]

export type { ApplicationModel, ApplicationsModel, OrganizationModel, OrganizationsModel }