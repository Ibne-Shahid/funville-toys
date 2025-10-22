
import NavBar from '../src/components/NavBar'
import { Outlet } from 'react-router'
import Footer from '../src/components/Footer'


const Root = () => {

  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root