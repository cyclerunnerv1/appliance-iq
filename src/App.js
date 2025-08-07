import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black text-white font-sans">
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
      </main>

      <footer className="text-center p-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Appliance IQ. All rights reserved.
      </footer>
    </div>
  );
}

export default App;