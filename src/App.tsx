/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Business from './components/Business';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Business />
        <Portfolio />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
