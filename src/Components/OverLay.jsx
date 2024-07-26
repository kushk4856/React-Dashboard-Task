import Header from "./Header";
import MainSideBar from "./MainSideBar";

const OverLay = () => {
  return (
    <div className="flex px-4 gap-5 bg-[#Eaf9ff]">
      <MainSideBar type="expand" />
      <div className=" w-full min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="p-3  pt-4">
          <h1 className="text-3xl font-bold mb-6">
            Welcome Back, <span className="text-[#ffa059]">Kanika</span>
          </h1>
        </main>
      </div>
    </div>
  );
};

export default OverLay;
