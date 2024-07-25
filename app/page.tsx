import Image from "next/image";
import { Tweet } from 'react-tweet'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-300 text-black">
      <header className="w-full max-w-5xl flex flex-col items-center justify-between">
      <Image
          src="/mutatedmind.png"
          alt="MutatedMind Logo"
          width={150}
          height={150}
          priority
        />
        <h1 className="text-4xl font-bold text-center mt-8">MutatedMind</h1>
        <p className="text-xl text-center my-8">Evolving Business Through AI Innovation</p>
      </header>

      <section className="w-full max-w-3xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Evolution Engine</h2>
        <p className="text-lg">
          At <strong>MutatedMind</strong>, our evolution engine is based on continuous research and experimentation, 
          creating an unending loop of innovation. Much like the art of morphing, we seamlessly transform and adapt,
          blending cutting-edge AI technology with insightful observation of the world. 
          Just as morphing allows one form to fluidly evolve into another, 
          our approach enables businesses to undergo their own profound transformations. 
          We inspire businesses to reimagine and optimize their operations, 
          developing innovative solutions that drive growth and efficiency. 
          Through this continuous process of change and adaptation, 
          we help businesses stay ahead of the curve and achieve their fullest potential.
        </p>
      </section>



      <section className="w-full max-w-xl mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Connect With Us</h2>
        <div className="flex flex-col items-center space-y-6">
          <a href="https://x.com/MutatedMindcom" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <Tweet id="1816227035658031232" />
          <Tweet id="1816106398792450425" />
        </div>
      </section>

      <footer className="w-full text-center">
        <p>&copy; 2024 MutatedMind. All rights reserved.</p>
      </footer>
    </main>
  );
}