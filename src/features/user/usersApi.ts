import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { APIDomain } from '../../utilis/ApiDomain';




export type TUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  is_verified: boolean;
};
export type TVerify = {
    email: string;
    code: string;
    };
export type TUpdate = {
    email: string;
    code: string;
    };

export type TGet = {
    email: string;
    code: string;
    };

export const UserApi = createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({
        baseUrl:APIDomain


    }),
    tagTypes:['Users'],
    endpoints:(builder)=>({
        createUsers:builder.mutation<TUser, Partial<TUser>>({
            query:(newUser)=>({
                url:'/auth/register',
                method:'POST',
                body:newUser

            }),
            invalidatesTags:['Users']

    }),

    getUser:builder.mutation<TGet, { email: string; code: string }>({
        query: ({ email,code }) => ({
            url: '/auth/get-email',
            method: 'POST',
            body: { email,code }
        }),
        invalidatesTags: ['Users']
    }),
    verifyUser:builder.mutation<TVerify, { email: string; code: string }>({
        query: ({ email,code }) => ({
            url: '/auth/verify-email',
            method: 'POST',
            body: { email,code }
        }),
        invalidatesTags: ['Users']
    }),
    getUsers:builder.query<TUser[], void>({
        query:()=>({
            url:'/auth/get-users',
            method:'GET'
        }),
        providesTags:['Users']
    }),

    updateUser:builder.mutation<TUpdate, { email: string; code: string }>({
        query: ({ email,code }) => ({
            url: '/auth/update-email',
            method: 'POST',
            body: { email,code }
        }),
        invalidatesTags: ['Users']
    })
})


})