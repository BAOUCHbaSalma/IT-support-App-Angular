export interface Person{
    id:number
    username:string
    password:string
    email:string
    role:Erole
}
export interface Technician extends Person{

}
export interface Admin extends Person{
    
}
export interface User extends Person{
    
}
export interface SupportTicket{
    id:number
    description:string
    creationDate:string
    status:EStatus
    repairDescription:string
    user:User
    technician:Technician
    equipment:Equipment
    failure:Failure

}
export interface Failure{
    id:number
    name:string
    description:string
}
export interface Equipment{
    idEquipement:number
    name:string
    insertionDate:string
    status:string
    user:User
}

export interface LoginRequest{
    username:string
    password:string
}
export interface SupportTicketDTO{
    description:string
    failureId:number
    equipmentId:number
    userId:number
}
export interface SupportTicketDTOUser{
    description:string
    creationDate:string
    repairDescription:string
    status:Erole
    nameEquipment:string
    nameFailure:string

}
export interface SupportTicketsDTOAdmin{
    idTechnicien:number
}
export interface SuppoetTicketDTOTechnicien{
    repairDescpription:string
}
export interface FailureHistory{
    failure:Failure
    equipment:Equipment
    failureDate:string
    resolveDate:string
    repair:string

}

export enum Erole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    TECHNICIAN='TECHNICIAN'
}
export enum EStatus {
    Pending = 'Pending',
    In_Progress = 'In_Progress',
    Resolved='Resolved'
 }

 export interface JwtPayload {
    sub: string; 
    iat: number; 
    exp: number; 
    roles: string; 
  }