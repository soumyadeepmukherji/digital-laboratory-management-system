import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

// Making Guards
export const authGuard: CanActivateFn = () => {
    const router = inject(Router)

    const user = localStorage.getItem('Current User')

    if(user){
        return true
    }

    return router.createUrlTree(['/login'])
}