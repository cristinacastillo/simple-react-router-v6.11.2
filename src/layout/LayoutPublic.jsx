import { Outlet } from "react-router-dom";
const LayoutPublic = (second) => {
  return (
    <>
      <div className="container">
        <Outlet/>
        <footer>Este es el footer</footer>
      </div>
    </>
  );
};

export default LayoutPublic;
