import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const authorApi = createApi({
    reducerPath:"authorApi",
    tagTypes:['Author'],
    baseQuery:fetchBaseQuery({baseUrl:'https://app-store-api.vercel.app',
    
}),
    
    endpoints:(builder)=>({
       getAuthors: builder.query(
        {
         query: ()=> '/authors',
         providesTags:['Author'],
         

        }
       ),
       getAuthor:builder.query({
        query: (authorId)=>`/authors/${authorId}`,
        providesTags:['Author'],
       }),
       addAuthor: builder.mutation({
        query:(formData)=>({
            url:'/authors',
            method: 'POST',
            body:JSON.stringify(formData),
            headers:{ 
                'Content-Type': 'application/json',
              
            }

        }),
        invalidatesTags:['Author']
       }),
       editAuthor:builder.mutation({
        query:({values , authorId})=>({
            url:`authors/${authorId}`,
            method:'PUT',      
            body:JSON.stringify(values),
            headers:{
                'Content-Type': 'application/json'
            }
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

