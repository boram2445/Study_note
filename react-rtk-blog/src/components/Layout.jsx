import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      {/* main 태그로 고치자 */}
      <main className="App">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
