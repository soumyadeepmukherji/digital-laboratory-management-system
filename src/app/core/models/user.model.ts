export type role = 'ADMIN' | 'TECHNICIAN' 

export interface User {
    id: number
    name: string
    email: string
    role: role
}