import Body from "./component/Layout/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./component/Home/Maincontainer";
import BookDetails from "./component/BookDetailsPage/BookDetails";
import { Provider } from "react-redux";
import store from "./utils/reduxStore/store";
import NewArrivalsBooksDetails from "./component/BookDetailsPage/NewArrivalsBooksDetails";
import Cart from "./component/CartPage/Cart";
import Order from "./component/ProductOrderPage/Order";
import Login from "./component/Auth/Login";
import UserAccount from "./component/UserAccount/UserAccount";
import SearchResults from "./component/Search/SearchResults";
import FilterButtonList from "./component/FilterButton/FilterButtonList";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "/details",
        element: <BookDetails />,
      },
      {
        path: "/NewArrivals",
        element: <NewArrivalsBooksDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/account",
        element: <UserAccount />,
      },
      {
        path: "/search-results",
        element: <SearchResults />,
      },
      {
        path: "/filter-results",
        element: <FilterButtonList />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
