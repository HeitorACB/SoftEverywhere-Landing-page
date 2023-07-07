import Header from './Containers/Hero'
import NavBar from './Containers/NavBar'
import SectionLogos from './Containers/SectionLogos'
import SectionNumbers from './Containers/SectionNumbers'
import SectionPoster from './Containers/SectionPoster'
import SectionPropagandas from './Containers/SectionPropagandas'
import SectionVuv from './Containers/SectionVuv'
import Footer from './Containers/footer'
import SectionComments from './Containers/sectionComments'

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <SectionLogos />
      <SectionNumbers />
      <SectionVuv />
      <SectionPropagandas />
      <SectionPoster />
      <SectionComments />
      <Footer />
    </>
  )
}

export default App
