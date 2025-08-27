import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import AboutSection from './components/About';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Header from './components/Header';
import MarkdownRenderer from './components/MarkDownRender';
import NavigationBar from './components/NavigationBar';
import Skills from './components/Skills';

const NotFound = () => {
  return <h2>404 - Page Not Found</h2>;
};

const Portfolio = () => {
  return (
    <div>
      <div style={{ padding: '8px' }}>
        <Header />
        <AboutSection />
        <Skills />
        <Blogs />
      </div>
    </div>
  );
}

const App = () => {
  return (


    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blogs/:id" element={<MarkdownRenderer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  );
};

export default App;