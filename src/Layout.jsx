import { Outlet } from "react-router-dom";
import {  Headerpage } from "./components/Header";
import {  FooterPage } from "./components/Footer";

export function Layout() {
  return (
    <>
      <Headerpage />
      <Outlet />
      <FooterPage />
    </>
  );
}