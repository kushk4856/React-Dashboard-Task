import MainSideBar from "./MainSideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex px-4 gap-5 bg-[#Eaf9ff]">
      <MainSideBar />
      <div className=" w-full min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="p-3 pt-4">
          <h1 className="text-3xl font-bold mb-6">
            Welcome Back, <span className="text-[#ffa059]">Kanika</span>
          </h1>

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
