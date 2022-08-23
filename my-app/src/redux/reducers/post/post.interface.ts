export interface IPostInterface {
    posts: IPost[],
    isLoading: boolean,
    isTrending: boolean,
    isNew: boolean,
}

export interface IPost {
    _id?: string,
    createdAt?: string,
    title: string,
    username?: string,
    breed: string,
    gender: string,
    size: string,
    text: string,
    imgUrl?: Blob | MediaSource | null | string,
    views?: number,
    author?: string
}