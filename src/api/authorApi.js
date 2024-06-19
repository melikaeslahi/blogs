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
       addAuthor: builder.mutation({
        query:(formData)=>({
            url:'authors',
            method: 'POST',
            body:formData,

        }),
        invalidatesTags:['Author']
       }),
       editAuthor:builder.mutation({
        query:({values , authorId})=>({
            url:`authors/${authorId}`,
            method:'PUT',
            body:values,

        }),
        invalidatesTags:['Author']
       }),
       deleteAuthor:builder.mutation({
        query:(authorId)=>({
           
            url:`authors/${authorId}`,
            method:'DELETE',
           

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

