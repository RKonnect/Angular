import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "../../models/User";
import { Injectable, inject } from "@angular/core";
import { Login } from "./user.action";
import { AuthService } from "../../services/auth/auth.service";


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
        return this.authService.login(action.credential).subscribe({
            next: (response) => {
                const JWT = response
                // Faire le decode

                // mettre le JWT dans le localstorage

                // caster le USER

                // set le state

            },
            error: (err) => {
                ctx.setState({
                    user: null,
                    isLogging: false
                })
            }
        })
    }

    @Selector()
    static loggedInUser(state: UserModel): User | null {
        return state.user;
    }

}