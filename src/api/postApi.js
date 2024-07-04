import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const postsApi = createApi({
    reducerPath:"postsApi",
    tagTypes:['Posts'],
    baseQuery:fetchBaseQuery({baseUrl:'https://app-store-api.vercel.app'}),
    endpoints:(builder)=>({
       getPosts: builder.query(
        {
 
         query: ()=> '/posts',
         providesTags:['Posts'],

        }
       ),
       getPost:builder.query({
        query: (blogId)=>`/posts/${blogId}`,
        providesTags:['Posts'],
       }),
       addPosts: builder.mutation({
        query:(initialPost)=>({
            url:'posts/',
            method: 'POST',
            body:initialPost,

        }),
        invalidatesTags:['Posts']
       }),
       editPost:builder.mutation({
        query:({values , postId})=>({
            url:`posts/${postId}`,
            method:'PUT',
            body: values,

        }),
        invalidatesTags:['Posts']
       }),
       deletePost:builder.mutation({
        query:(postId)=>({
            url:`posts/${postId}`,
            method:'DELETE',
           

        }),
        invalidatesTags:['Posts']
       })

    }
    )
});

export const {
              
              useGetPostsQuery ,
              useGetPostQuery,
              useAddPostsMutation,
              useEditPostMutation,
              useDeletePostMutation

} = postsApi;

