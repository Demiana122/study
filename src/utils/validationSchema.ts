import { z } from "zod";

// CREATE ARTICLE SCHEMA
export const createArticleSchema =  z.object({
    title: z.string({
        required_error:"title is required",
        invalid_type_error:"title should be type of string"
    }).min(2,{message:"title must be at least 2 characters"})
    .max(200,{message:"title must be less than 200 characters"}),
    description :z.string().min(10),
});

//register schema 
export const registerSchema = z.object({
    username:z.string().min(2).max(100),
    email:z.string().min(3).max(200).email(),
    password:z.string().min(6),
});

// login schema
export const loginSchema = z.object({
    email:z.string().min(3).max(200).email(),
    password:z.string().min(6),
});

// create comment schema
export const createCommentSchema = z.object({
    text:z.string().min(2).max(500),
    articleId:z.number(),
});

//update user profile schema
export const updatedUserSchema = z.object({
    username:z.string().min(2).max(100).optional(),
    email:z.string().min(3).max(200).email().optional(),
    password:z.string().min(6).optional(),
});
