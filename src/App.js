import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
// import PhotoList from './components/PhotoList';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'fullStack',
      description: "Projects I've completed in my bootcamp course.",
    },
    { name: 'resume', description: '2020 Resume' },
    { name: 'creative', description: '' },
    // { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
              <ContactForm></ContactForm>
            )}
            <Footer />
        </div>
      </main>
    </div>
  );
}


export default App;
