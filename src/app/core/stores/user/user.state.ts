import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "../../models/User";
import { Injectable, inject } from "@angular/core";
import { Login } from "./user.action";
import { AuthService } from "../../services/auth/auth.service";
import { jwtDecode } from "jwt-decode";
import { Subscription } from "rxjs";

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

    authService: AuthService = inject(AuthService)

    @Action(Login)
    login(ctx: StateContext<UserModel>, action: Login) {
        console.info('states')
        const subscriber: Subscription = this.authService.login(action.credential).subscribe({
            next: (token) => {
                // mettre le JWT dans le local storage
                localStorage.setItem("JWT", token);
                // Faire le decode
                const JWT = jwtDecode(token);
                console.info({ JWT })
                // caster le USER
                const User = JWT as User
                // set le state
                ctx .setState({
                    user: User,
                    isLogging: true
                })
            },
            error: (err) => {
                ctx.setState({
                    user: null,
                    isLogging: false
                })
            }, 
            complete: () => subscriber.unsubscribe()
        })
    }

    @Selector()
    static loggedInUser(state: UserModel): User | null {
        return state.user;
    }

}