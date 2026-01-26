import { Categorycontainer } from "./components/layout/categorypage/Categorycontainer";
import { Pagecontainer } from "./components/layout/homepage/Pagecontainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Productdetail } from "./components/productDetail/Productdetail";

const routes = {
  home: "/",
  category: "/category/:categoryName",
  product: "/product/:productSlug",
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Pagecontainer />} />
        <Route path={routes.category} element={<Categorycontainer />} />
        <Route path={routes.product} element={<Productdetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;