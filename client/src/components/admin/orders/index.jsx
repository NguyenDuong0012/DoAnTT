import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout/index.jsx";
import OrderMenu from "./OrderMenu.jsx";
import AllOrders from "./AllOrders.jsx";
import { orderState, orderReducer } from "./OrderContext.js";

/* This context manage all of the orders component's data */
export const OrderContext = createContext();

const OrderComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <OrderMenu />
      <AllOrders />
    </div>
  );
};

const Orders = (props) => {
  const [data, dispatch] = useReducer(orderReducer, orderState);
  return (
    <Fragment>
      <OrderContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<OrderComponent />} />
      </OrderContext.Provider>
    </Fragment>
  );
};

export default Orders;
