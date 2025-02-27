export interface CreateArticleDeto{
    title:string;
    description:string;
}

export interface UpdateArticleDeto{
    title?:string;
    description?:string;
}
export interface RegisterUserDto{
    username:string;
    email:string;
    password:string;
}

export interface LoginUserDto{
    email:string;
    password:string;
}

export interface UpdateUserDeto {
    username?: string;
    email?: string ;
    password?:string
}

export interface CreateCommentDeto {
    text:string;
    articleId:number;
}

export interface UpdateCommentDeto{
    text:string;
}