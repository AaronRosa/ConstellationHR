import { Outlet } from "react-router-dom";
import HeaderMenu from "../headerMenu";
function MainLayout() {
  return (
    <>
      <HeaderMenu />
      <Outlet />
    </>
  );
}

export default MainLayout;
