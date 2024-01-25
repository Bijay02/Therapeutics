import * as React from "react";
import HcpLayout from "../components/layout";
import "./index.scss";

const IndexPage = () => {
  return (
    <HcpLayout pageClass="muna-homepage">
      <h1>hello</h1>
    </HcpLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
