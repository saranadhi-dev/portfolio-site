import './App.css';
import AboutSection from './components/About';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div style={{padding:'8px'}}>
        <Header />
        <AboutSection />
        <Skills />
        <Blogs/>
        {/* <Experience/>
      <ProjectsSection />
      <ContactSection /> */}
       
      </div>
     <Footer />
    </div>
  );
};

export default App;