import "./App.css";
import RootLayout from "./Layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SettingPage from "./pages/SettingPage";
import AccountPage from "./pages/AccountPage";
import CustomerPage from "./pages/CustomerPage";
import Categorypage from "./pages/Categorypage";
import SubCategoryPage from "./pages/SubCategoryPage";
import OrderListPage from "./pages/OrderListPage";
import AuthLayout from "./Layout/AuthLayout";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import ForgetPassword from "./components/auth/ForgetPassword";
import VerificationCode from "./components/auth/VerificationCode";
import ResetPassword from "./components/auth/ResetPassword";
import ProductsListPage from "./pages/ProductsListPage";
import AddProducts from "./components/AddProducts/AddProducts";
import AddCategories from "./components/AddCategories/AddCategories";
import AddSubCategories from "./components/AddSubCategories/AddSubCategories";
import AttributesPage from "./pages/AttributesPage";
import DiscountsPage from "./pages/DiscountsPage";
import BrandsPage from "./pages/BrandsPage";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignInForm />,
      },
      {
        path: "signup",
        element: <SignUpForm />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "verification-code",
        element: <VerificationCode />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/setting",
        element: <SettingPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/customer",
        element: <CustomerPage />,
      },
      {
        path: "/category",
        element: <Categorypage />,
      },
      {
        path: "/productslist",
        element: <ProductsListPage />,
      },
      {
        path: "/subcategory",
        element: <SubCategoryPage />,
      },
      {
        path: "/orderlist",
        element: <OrderListPage />,
      },
      {
        path: "/addproduct",
        element: <AddProducts />,
      },
      {
        path: "/addcategories",
        element: <AddCategories />,
      },
      {
        path: "/addsubcategories",
        element: <AddSubCategories />,
      },
      {
        path: "/attributes",
        element: <AttributesPage />,
      },
      {
        path: "/brands",
        element: <BrandsPage />,
      },
      {
        path: "/discounts",
        element: <DiscountsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
