import Navbar from "../components/Navbar/Navbar"
import Subscribe from "../components/Subscribe/Subscribe"
import SubscribeTG from "../components/SubscribeTGContent/SubscribeTGContent"
import SubscribeThreads from "../components/SubscribeThreads/SubscribeThreads"
import Progress from "../components/Progress/Progress"

function Content(){
  return(
    <>
        <Navbar/>
<SubscribeTG/>
<Progress/>
<SubscribeThreads/>
    <Subscribe/>
    </>
  )
}

export default Content