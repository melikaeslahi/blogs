import *  as Yup from 'yup';

export const  postScheme = Yup.object({
     name: Yup.string().min(2 , 'min char is 2').max(40,'max char is 40').required(),
     image: Yup.string().required(),
     text: Yup.string().min(2,'minimum char is 2').max(1000 , 'maximum char is 1000').required(),
     category_id : Yup.number().required(),
     author_id: Yup.number().required(),
     created_at:Yup.date()
})