import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import routeData from './routes'
import DeleteModal from './components/DeleteModal'
function App() {
  // console.log(routeData);
  const routerData = routeData
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routerData.map((item) => (item.index === true) ?  
            <Route key={item.name} index element={<item.element/>}/> :  
            <Route key={item.name} path={item.path} element={<item.element/>}/> )}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
