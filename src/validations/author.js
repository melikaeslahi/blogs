import *  as Yup from 'yup';

export const  authorScheme = Yup.object({
     name: Yup.string().min(2 , 'min char is 2').max(40,'max char is 40').required(),
     image: Yup.string().required(),
     bio: Yup.string().min(2,'minimum char is 2').max(200, 'maximum char is 200').required(),
})