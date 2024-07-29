import Header from './components/header'
import Slider from './components/slider'
import Book from './components/book'
import Packages from './components/packages'
import Services from './components/services'
import Gallery from './components/gallery'
import Reviews from './components/reviews'
import Contact from './components/contact'
import Footer from './components/footer'
const MainPage = () => {
  return (
    <>

        <main className='relative transition-custom'>
            <Header/>
            <Slider/>
            <Book/>
            <Packages/>
            <Services/>
            <Gallery/>
            <Reviews/>
            <Contact/>
            <Footer/>
        </main>
    </>
  )
}

export default MainPage