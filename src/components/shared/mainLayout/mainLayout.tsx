import { Outlet } from "react-router-dom";
import HeaderMenu from "../headerMenu";
function MainLayout() {
  return (
    <>
      <HeaderMenu />
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
