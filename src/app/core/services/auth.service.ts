import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({providedIn:'root'})

export class AuthService {
    //Mock Users
    private users = [
        {
            id: 1,
            name: 'Admin',
            email: 'admin@demo.com',
            password: 'admin@123',
            role: 'ADMIN' as const
        },
        {
            id:2,
            name: 'technician',
            email: 'technician@demo.com',
            password: 'technician@789',
            role: 'TECHNICIAN' as const 
        }
    ]


    // User is Login
    login(email: string | null, password: string | null): User | null{
        //If logged in user is in the mock data
        const user = this.users.find(user => user.email == email && user.password == password)

        if(!user){
            return null
        }
        // Store the data
        const loggedInUser: User = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }

        localStorage.setItem('Current User',JSON.stringify(loggedInUser))

        console.log('logged')

        return loggedInUser
    }

    //To get the user
    getCurrentUser(): User|null{
        const user = localStorage.getItem('Current User')

        if(!user){
            return null
        }

        console.log(JSON.parse(user));
        

        return JSON.parse(user)
    }

    // Logout
    logout(): void{
        localStorage.removeItem('Current User')
    }

    isLoggedIn(): boolean{

        if(localStorage.getItem('Current User')){
            return true
        }
        
        return false
    }
}
