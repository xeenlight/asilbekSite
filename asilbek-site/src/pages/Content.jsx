import Navbar from "../components/Navbar/Navbar"
import Subscribe from "../components/Subscribe/Subscribe"
import SubscribeTG from "../components/SubscribeTGContent/SubscribeTGContent"
import SubscribeThreads from "../components/SubscribeThreads/SubscribeThreads"
import YouTubeHero from "../components/YouTubeHero/YouTubeHero"

function Content(){
  return(
    <>
        <Navbar/>
<SubscribeTG/>
<YouTubeHero/>
<SubscribeThreads/>
    <Subscribe/>
    </>
  )
}

export default Content