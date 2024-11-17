
import Header from "./component/header"
import Herosection from "./component/herosection"
import DisPlay from "./component/displaysection"
import Card from "./component/card"
import PopulerCard from "./component/papulerCard"
import Review from "./component/review"
import Footer from "./component/footer"
const Home=()=>{
return(
  <div>
    <Header />
    <Herosection />
    <DisPlay/>
    <Card/>
    <PopulerCard/>
    <Review/>
    <Footer/>
  </div>
)
}
export default Home