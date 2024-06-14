import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const categoryApi = createApi({
    reducerPath:"categoryApi",
    tagTypes:['Category'],
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:9000/'}),
    endpoints:(builder)=>({
       getCategories: builder.query(
        {
         query: ()=> '/categories',
         providesTags:['Category'],

        }
       ),
       getCategory:builder.query({
        query: (blogId)=>`/categories/${blogId}`,
        providesTags:['Category'],
       }),
       addCategory: builder.mutation({
        query:(initialPost)=>({
            url:'categories/',
            method: 'POST',
            body:initialPost,

        }),
        invalidatesTags:['Category']
       }),
       editCategory:builder.mutation({
        query:(post)=>({
            url:`categories/${post.id}`,
            method:'PUT',
            body:post,

        }),
        invalidatesTags:['Category']
       }),
       deleteCategory:builder.mutation({
        query:(post)=>({
            url:`categories/${post.id}`,
            method:'DELETE',
            body:post,

        }),
        invalidatesTags:['Category']
       })

    }
    )
});

export const {
              
              useGetCategoriesQuery ,
              useGetCategoryQuery,
              useAddCategoryMutation,
              useEditCategoryMutation,
              useDeleteCategoryMutation

} = categoryApi;

