import BlankLayout from "@/components/layouts/blank_layout";
import LoginView from "@/views/login";
import React, { ReactElement } from "react";

const LoginPage = () => {
  return <LoginView />;
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
