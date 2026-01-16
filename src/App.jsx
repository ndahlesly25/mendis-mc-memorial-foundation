
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import History from './pages/About/History'
import Mission from './pages/About/Mission'
import AnnualReports from './pages/About/AnnualReports'
import QuarterlyNews from './pages/About/QuarterlyNews'
import BoardStaff from './pages/About/BoardStaff'
import Categories from './pages/Categories'
import Overview from './pages/ApplicationGuidelines/Overview'
import HowToApply from './pages/ApplicationGuidelines/HowToApply'
import DecisionProcess from './pages/ApplicationGuidelines/DecisionProcess'
import GrantReporting from './pages/ApplicationGuidelines/GrantReporting'
import GrantDirectory from './pages/GrantDirectory'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/annual-reports" element={<AnnualReports />} />
        <Route path="/about/quarterly-news" element={<QuarterlyNews />} />
        <Route path="/about/board-staff" element={<BoardStaff />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/guidelines/overview" element={<Overview />} />
        <Route path="/guidelines/how-to-apply" element={<HowToApply />} />
        <Route path="/guidelines/decision-process" element={<DecisionProcess />} />
        <Route path="/guidelines/grant-reporting" element={<GrantReporting />} />
        <Route path="/grants" element={<GrantDirectory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
