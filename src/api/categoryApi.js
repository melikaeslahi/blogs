import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { json } from 'react-router-dom';


export const categoryApi = createApi({
    reducerPath:"categoryApi",
    tagTypes:['Category'],
    baseQuery:fetchBaseQuery({baseUrl:'https://app-store-api.vercel.app'}),
    endpoints:(builder)=>({
       getCategories: builder.query(
        {
         query: ()=> '/categories',
         providesTags:['Category'],

        }
       ),
       getCategory:builder.query({
        query: (categoryId)=>`/categories/${categoryId}`,
        providesTags:['Category'],
       }),
       addCategory: builder.mutation({
        query:(formData)=>({
            url:'categories',
            method: 'POST',
            body:JSON.stringify(formData),
            headers:{
                'Content-Type': 'application/json'
            }


        }),
        invalidatesTags:['Category']
       }),
       editCategory:builder.mutation({
        query:({values , categoryId })=>({
            url:`categories/${categoryId}`,
            method:'PUT',
            body: JSON.stringify(values),
            headers:{
                'Content-Type': 'application/json'
            }

        }),
        invalidatesTags:['Category']
       }),
       deleteCategory:builder.mutation({
        query:(categoryId)=>({
            url:`categories/${categoryId}`,
            method:'DELETE',
            

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

