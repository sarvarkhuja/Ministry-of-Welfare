export interface GetWorkplace {
    nationalId: number;
    lastName: string;
    firstName: string;
    district: number;
    districtDescription: string;
    department: number;
    departmentDescription: string;
    priorityRegion: string;
    councilType1: number;
    councilType1Description: string;
    geoRegion1: number;
    geoRegion1Description: string;
    warning?: any;
    district2Id: number;
    district2: string;
    department2: number;
    department2Description?: any;
    priorityRegion2: string;
    councilType2: number;
    councilType2Description: string;
    geoRegion2Id: number;
    geoRegion2?: any;
    warning2?: any;
    district3Id: number;
    district3?: any;
    department3: number;
    department3Description?: any;
    priorityRegion3: string;
    councilType3: number;
    councilType3Description: string;
    geoRegion3Id: number;
    geoRegion3?: any;
    warning3?: any;
    district4Id: number;
    district4?: any;
    department4: number;
    department4Description?: any;
    priorityRegion4: string;
    councilType4: number;
    councilType4Description?: any;
    geoRegion4Id: number;
    geoRegion4?: any;
    warning4?: any;
}
