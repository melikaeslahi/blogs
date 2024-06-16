import { text } from '@fortawesome/fontawesome-svg-core';
import *  as Yup from 'yup';


export const categoryScheme = Yup.object({
    title:Yup.string().required(),
    description: Yup.string().required(), 
})