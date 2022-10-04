import { Outlet } from "react-router-dom";


function SharedLayout() {

  return (
    <>
    <div className="min-h-full ">
        <header className="pb-24 bg-stone-600">
          
        </header>
        <main className="-mt-24 pb-8 pt-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <Outlet/>
          </div>
        </main>
       
      </div>
    </>
  );
}

export default SharedLayout;
