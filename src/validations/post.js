import *  as Yup from 'yup';

export const  postSchema = Yup.object({
     title: Yup.string().min(2 , 'min char is 2').max(40,'max char is 40').required(),
     image: Yup.string().required(),
     text: Yup.string().min(2,'minimum char is 2').max(2000 , 'maximum char is 2000').required(),
     category_id : Yup.string().required(),
     author_id: Yup.string().required(),
     created_at:Yup.date()
})