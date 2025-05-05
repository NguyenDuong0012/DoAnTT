import React, { Fragment } from "react";
import Layout from "../layout";
import SingleWishProduct from "./SingleWishProduct.jsx";

const WishList = () => {
  return (
    <Fragment>
      <Layout children={<SingleWishProduct />} />
    </Fragment>
  );
};

export default WishList;
