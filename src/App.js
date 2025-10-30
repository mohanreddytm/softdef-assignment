import Header from './components/Header';
import './App.css';
import bc from './assets/mainbc.jpg';
import HeaderContainer from './appstyle';
import HomePageOne from './components/HomePageOne';
import TrenduPlants from './components/TrendyPlants';

import TopSellingPlants from './components/TopSellingPlants'
import CustomerReview from './components/CustomerReview'
import FooterOne from './components/FooterOne'
import OurBest from './components/OurBest';

function App() {
  return (
    <>
    <HeaderContainer background={bc} className="App">
      <Header />
      <HomePageOne />
      <TrenduPlants />
    
    </HeaderContainer>
    <div className='app-bottom-level'>
      <TopSellingPlants />
      <CustomerReview />
      <OurBest />
      <FooterOne />
    </div>
    </>
  );
}

export default App;
