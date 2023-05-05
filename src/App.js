import './App.css';
import Header from './components/Header';
import {Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SEO from './components/sub-compo/service/SEO';
import SEOAudit from './components/sub-compo/service/SEOAudit';
import Services from './components/Services';
import SocialMediaMarketing from './components/sub-compo/service/SocialMediaMarketing';
import PaidAds from './components/sub-compo/service/PaidAds';


function App() {
  return (
    <div className="App">
      <Header/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/service' element={<Services/>}/>
  <Route exact path='/about' element={<About/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
  {/* <Route exact path='/quote' element={<HomeQuote/>}/> */}
  <Route exact path='/service/seo' element={<SEO/>}/>
  <Route exact path='/service/seoaudit' element={<SEOAudit/>}/>
  <Route exact path='/service/paidads' element={<PaidAds/>}/>
  <Route exact path='/service/socialmediamarketing' element={<SocialMediaMarketing/>}/>
  
</Routes>
    </div>
  );
}

export default App;


// theme 
// hover color for navbar color: #04bf7e;
//  color for navbar color: rgb(87 87 87);
// info page background color gray background-color: #EDEFF2;
// font     color: #627792; 
// h1 color: #0e2b5c;