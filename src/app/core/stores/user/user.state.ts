import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "../../models/User";
import { Injectable, inject } from "@angular/core";
import { GetUserState, Login } from "./user.action";
import { AuthService } from "../../services/auth/auth.service";
import { jwtDecode } from "jwt-decode";
import { Observable, Subscription } from "rxjs";
import { UserService } from "../../services/user/user.service";
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

export interface UserModel {
    user: User | null,
    isLogging: boolean
}
@State<UserModel>({
    name: 'user',
    defaults: {
        user: null,
        isLogging: false
    }
})

@Injectable()
export class UserState {

    cookieService: CookieService = inject(CookieService)
    authService: AuthService = inject(AuthService)
    userService: UserService = inject(UserService)
    router: Router = inject(Router);
    @Action(Login)
    login(ctx: StateContext<UserModel>, action: Login) {
        console.info('states')
        const subscriber: Subscription = this.authService.login(action.credential).subscribe({
            next: (token) => {
                // mettre le JWT dans le local storage
                this.cookieService.set('token', token)
                const test = this.cookieService.get('token');
                console.info({ test })
                // Faire le decode
                const JWT = jwtDecode(token);
                console.info({ JWT })
                // récupérer L'id user
                const id: number = Object.values(JWT)[0] as number ?? 0
                const email: string = Object.values(JWT)[1] as string ?? ''
                const idUser: string = id.toString() as string
                this.cookieService.set('idUser', idUser)
                console.log(id);
                const user: User = {
                    id,
                    email
                }
                ctx.setState({
                    user: user,
                    isLogging: true
                })
            },
            error: (err) => {
                ctx.setState({
                    user: null,
                    isLogging: false
                })
            }, 
            complete: () =>{
                subscriber.unsubscribe()
                const idUser = ctx.getState().user?.id
                console.info({idUser})
                if (!idUser) {
                    return
                }
                const sub: Subscription = this.userService.getOne(idUser).subscribe({
                    next: (user) => {
                        console.log({user})
                        ctx.setState({
                            isLogging: true,
                            user: user
                        })
                        const userState = ctx.getState().user
                        sub.unsubscribe()
                    }
                })
           //    
            }
        })
    }

    @Action(GetUserState)
    getUserState(ctx: StateContext<UserModel>, action: GetUserState) {
        return ctx.getState();
    }


}