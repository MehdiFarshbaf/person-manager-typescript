export interface IState {
    peoples: {
        id: number,
        fullName: string,
        age: number,
        img_url: string,
        bio?: string
    }[],
}

export interface IPeople {
    id: number,
    fullName: string,
    age: number,
    img_url: string,
    bio?: string
}