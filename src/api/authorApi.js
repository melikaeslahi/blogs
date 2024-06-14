import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const authorApi = createApi({
    reducerPath:"authorApi",
    tagTypes:['Author'],
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:9000/'}),
    endpoints:(builder)=>({
       getAuthors: builder.query(
        {
         query: ()=> '/authors',
         providesTags:['Author'],

        }
       ),
       getAuthor:builder.query({
        query: (blogId)=>`/authors/${blogId}`,
        providesTags:['Author'],
       }),
       addCategory: builder.mutation({
        query:(initialPost)=>({
            url:'authors/',
            method: 'POST',
            body:initialPost,

        }),
        invalidatesTags:['Author']
       }),
       editAuthor:builder.mutation({
        query:(post)=>({
            url:`authors/${post.id}`,
            method:'PUT',
            body:post,

        }),
        invalidatesTags:['Author']
       }),
       deleteAuthor:builder.mutation({
        query:(post)=>({
            url:`authors/${post.id}`,
            method:'DELETE',
            body:post,

        }),
        invalidatesTags:['Author']
       })

    }
    )
});

export const {
              
              useGetAuthorsQuery ,
              useGetAuthorQuery,
              useAddAuthorMutation,
              useEditAuthorMutation,
              useDeleteAuthorMutation

} = authorApi;

