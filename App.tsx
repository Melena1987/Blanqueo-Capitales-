import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FormSection } from './components/FormSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;