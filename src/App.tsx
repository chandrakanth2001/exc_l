import { Categorycontainer } from "./components/layout/categorypage/Categorycontainer";
import { Pagecontainer } from "./components/layout/homepage/Pagecontainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const routes = {
  home: "/",
  category: "/category/:categoryName",
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Pagecontainer />} />
        <Route path={routes.category} element={<Categorycontainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;