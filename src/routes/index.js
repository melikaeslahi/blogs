import { BrowserRouter } from "react-router-dom";
import Blogs from "../pages/Blogs";
import App from "../App";
import Blog from "../pages/Blog";
import Authors from "../pages/Author/Authers";
import CreateAuther from "../pages/Author/CreateAuthor";
import Categories from "../pages/Category/Categories";
import CreateCategory from "../pages/Category/CreateCategory";
import EditCategory from "../pages/Category/EditCategory";


export const routes = BrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <NotFound />
    },
    {
        path : "blogs",
        element : <Blogs />
    },
    {
        path : "blogs/:blogId",
        element : <Blog />
    },
    {
        path : "authers",
        element : <Authors />
    },
    {
        path : "authers/create",
        element : <CreateAuther />
    },
    {
        path : "authers/edit/:autherId",
        element : <EditAuther />
    },
    {
        path : "categories",
        element : <Categories />
    },
    {
        path : "categories/create",
        element : <CreateCategory />
    },
    {
        path : "categories/edit/:categoryId",
        element : <EditCategory />
    },
])