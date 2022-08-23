export interface IUserState{
    email: string
    username?: string
    fullName: string
    id?: string
}

export interface IUserInitialState {
    user: IUserState | null
    isLoading: boolean
}


export interface IAuthResponse {
    user: IUserState
    token?: string
}