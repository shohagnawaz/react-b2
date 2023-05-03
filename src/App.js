import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/Header';
import AppHero from './components/Hero';
import AppAbout from './components/About';
import AppService from './components/Services';
import AppWorks from './components/Works';
import AppTeams from './components/Teams';
import AppTestimonials from './components/Testimonials';
import AppPricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppService />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        <AppPricing />
      </main>
    </div>
  );
}

export default App;
