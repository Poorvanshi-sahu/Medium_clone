import Advertisement from "../components/Advertisement"
import Home from "../components/Home"
import Navbar from "../components/Navbar"

function LandingPage() {
  return (
    <>
    <div className='w-screen'>
        <Navbar/>
        <Advertisement/>
        <Home/>
    </div>
    </>
  )
}

export default LandingPage

