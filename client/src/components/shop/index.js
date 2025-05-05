import Home from "./home/index.jsx";
import WishList from "./wishlist/index.jsx";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";
import CartProtectedRoute from "./auth/CartProtectedRoute";
import { LayoutContext } from "./layout";
import { layoutState, layoutReducer } from "./layout/layoutContext";
import { isAdmin, isAuthenticate } from "./auth/fetchApi";
import PageNotFound from "./layout/PageNotFound";
import ProductDetails from "./productDetails/index.jsx";
import ProductByCategory from "./home/ProductByCategory.jsx";
import CheckoutPage from "./order/CheckoutPage";
import BlogIndex from "./blog/index.jsx";
import ContactIndex from "./contact/index.jsx";

export {
    Home,
    WishList,
    ProtectedRoute,
    AdminProtectedRoute,
    CartProtectedRoute,
    LayoutContext,
    layoutState,
    layoutReducer,
    isAdmin,
    isAuthenticate,
    PageNotFound,
    ProductDetails,
    ProductByCategory,
    CheckoutPage,
    BlogIndex,
    ContactIndex,
};