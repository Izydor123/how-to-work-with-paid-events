import './App.css'
import Menu from './components//Menu'
import Header from './components/Header'
import Speakers from './components/Speakers'
import Offerts from './components/Offerts'
import Location from './components/Location'
import Form from './components/Form'
import Footer from './components/Footer'


function App() {
  return (
    <section className="app">
      <Menu/>
      <Header/>
      <Speakers/>
      <Offerts/>
      <Form/>
      <Location/>
      <Footer/>
    </section>
  )
}

export default App
