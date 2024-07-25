import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-100 text-black">
      <header className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-4">MutatedMind</h1>
        <p className="text-xl text-center mb-8">Evolving Business Through AI Innovation</p>
      </header>

      <section className="w-full max-w-3xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Evolution Engine</h2>
        <p className="text-lg">
          At <strong>MutatedMind</strong>, our evolution engine is based on continuous research and experimentation, creating an unending loop of innovation. Much like the art of morphing, we seamlessly transform and adapt, blending cutting-edge AI technology with insightful observation of the world. Just as morphing allows one form to fluidly evolve into another, our approach enables businesses to undergo their own profound transformations. We inspire businesses to reimagine and optimize their operations, developing innovative solutions that drive growth and efficiency. Through this continuous process of change and adaptation, we help businesses stay ahead of the curve and achieve their fullest potential.
        </p>
      </section>

      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
            <p>Expert guidance on integrating AI into your business processes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Custom AI Solutions</h3>
            <p>Tailored AI systems designed to meet your specific needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p>Advanced data analysis to uncover valuable insights.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">AI Training</h3>
            <p>Comprehensive training programs to empower your team.</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-xl mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Connect With Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://x.com/MutatedMindcom" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          {/* <a href="https://linkedin.com/company/MutatedMind" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a> */}
        </div>
      </section>

      <footer className="w-full text-center">
        <p>&copy; 2024 MutatedMind. All rights reserved.</p>
      </footer>
    </main>
  );
}