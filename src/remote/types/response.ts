export interface IEntityResponse<T> {
    status: boolean
    code: number
    data: T
    message?: string
}

export interface IUserResponse {
    _id: string
    email: string
    name: string
    organization: {
        _id: string
        name: string
    }
    role: "ADMIN" | "MEMBER"
}