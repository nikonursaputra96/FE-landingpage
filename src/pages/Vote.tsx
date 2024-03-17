import SectionVote from '../component/Vote/SectionVote'
import Navbar from '../component/Home/Navbar'
import Footer from '../component/Home/Footer'
import Info from '../component/Vote/Info'


const Vote:React.FC = () => {


  return (
    <div>
        <Navbar/>
        <SectionVote/>
        <Info/>
        <Footer/>
    </div>
  )
}

export default Vote