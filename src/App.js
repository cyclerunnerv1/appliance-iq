import React from "react";
import { Player } from 'lottie-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black text-white font-sans">
      <div className="absolute top-4 right-4 w-24">
  <Player
    autoplay
    loop
    src="https://lottie.host/3ad8a8d2-9f32-406e-8c4e-54f178347cdf/H4drD1Jb3g.json"
  />
</div>
      <header className="p-6 text-center space-y-2">
        <h1 className="text-4xl font-bold">Appliance IQ</h1>
        <p className="text-lg">Expert Appliance Repairs in Ohio</p>
        <nav className="flex justify-center space-x-4 mt-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="p-6 space-y-12">
        <section id="about">
          <h2 className="text-2xl font-semibold mb-2">About Appliance IQ</h2>
          <p>
            With over 10 years in the field, Appliance IQ provides expert appliance
            repair services with honesty, speed, and professionalism. Based in Dayton, we serve
            Cincinnati, Columbus, and the surrounding areas.
          </p>
        </section>

        <section id="services">
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Refrigerator Repair</li>
            <li>Washer & Dryer Repair</li>
            <li>Dishwasher Repair</li>
            <li>Oven & Stove Repair</li>
            <li>Microwave Repair</li>
            <li>Garbage Disposal Repair</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>📞 (937) 542-2150</p>
          <p>📧 applianceiq@myyahoo.com</p>
          <p>🏙️ Serving Dayton, Cincinnati, and Columbus, OH</p>
        </section>

        <section id="booking">
          <h2 className="text-2xl font-semibold mb-2 mt-10">Book a Service Call</h2>
          <form
            action="https://formspree.io/f/mdkdpoyd" 
            method="POST"
            className="space-y-4 max-w-md"
       >
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 rounded text-black" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 rounded text-black" />
          <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 rounded text-black" />
          <textarea name="message" placeholder="Describe the issue..." rows="4" required className="w-full p-2 rounded text-black"></textarea>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit Request
          </button>
        </form>
       </section>
      </main>

      <footer className="text-center p-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Appliance IQ. All rights reserved.
      </footer>
    </div>
  );
}

export default App;