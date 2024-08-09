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
    reparationEffectue:string
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
    reparationEffectue:string
    status:Erole
    nameEquipment:string
    nameFailure:string

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