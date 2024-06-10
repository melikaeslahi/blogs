import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Blogs from "../pages/Blogs";
 
import Blog from "../pages/Blog";
import Authors from "../pages/Author/Authers";
import CreateAuther from "../pages/Author/CreateAuthor";
import Categories from "../pages/Category/Categories";
import CreateCategory from "../pages/Category/CreateCategory";
import EditCategory from "../pages/Category/EditCategory";
import MainLayout from "../components/layouts/MainLayout";
import NotFound from "../components/NotFound";
import EditAuthor from "../pages/Author/EditAuthor";
import App from "../App";


export const router =  createBrowserRouter([
    {
        path:"/",
        element:  <App /> ,
        errorElement: <NotFound />
    },
    {
        path : "blogs",
        element : <MainLayout> <Blogs /></MainLayout>
    },
    {
        path : "blogs/:blogId",
        element : <MainLayout> <Blog /></MainLayout>
    },
    {
        path : "authors",
        element : <MainLayout><Authors /></MainLayout>
    },
    {
        path : "authors/create",
        element : <MainLayout> <CreateAuther /></MainLayout>
    },
    {
        path : "authors/edit/:autherId",
        element :<MainLayout> <EditAuthor /></MainLayout>
    },
    {
        path : "categories",
        element : <MainLayout><Categories /></MainLayout>
    },
    {
        path : "categories/create",
        element : <MainLayout><CreateCategory /></MainLayout>
    },
    {
        path : "categories/edit/:categoryId",
        element :<MainLayout><EditCategory /></MainLayout>
    },
])