import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const postsApi = createApi({
    reducerPath:"postsApi",
    tagTypes:['Posts'],
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:9000/'}),
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
        query:(post)=>({
            url:`posts/${post.id}`,
            method:'PUT',
            body:post,

        }),
        invalidatesTags:['Posts']
       }),
       deletePost:builder.mutation({
        query:(post)=>({
            url:`posts/${post.id}`,
            method:'DELETE',
            body:post,

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

