import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#header')!.innerHTML = `
  <header class="fixed -top-0 left-0 w-full bg-gray-900">
      <section class="flex items-center justify-between px-8 p-1">
        <div class="flex items-center gap-4 -mt-4">
          <img class="w-20" src="/src/image/logo.png" alt="Logo">
          <a href="/index.html"><h1 class="text-white font-black text-3xl hover:text-orange-600 transition">Ball Dragon</h1></a>
        </div>

        <nav>
          <ul class="flex gap-10">
            <li>
              <a href="/personnage.html" class="text-2xl font-bold text-white hover:text-orange-600 transition">Personnage</a>
            </li>
            <li>
              <a href="/transformations.html" class="text-2xl font-bold text-white hover:text-orange-600 transition">Tranformations</a>
            </li>
            <li>
              <a href="/planet.html" class="text-2xl font-bold text-white hover:text-orange-600 transition">Planet</a>
            </li>
          </ul>
        </nav>
      </section>
      <img class="ml-140" src="/src/image/texteLogo.png">
    </header>
`
document.querySelector<HTMLDivElement>('#section')!.innerHTML = `
    <section class="flex flex-wrap justify-center gap-8 px-6 py-12 mt-120 -ml-20">
      <!-- Carte personnage -->
      <div class="relative bg-amber-500 pt-20 pb-10 px-8 rounded-3xl shadow-xl text-white w-80 hover:bg-amber-600 transition-transform duration-300">
        <img class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-49 rounded-2xl shadow-lg border-4 border-white" src="/src/image/imagePersonnage.png" alt="Personnage">
        <div class="mt-25 text-center">
          <h2 class="text-2xl font-extrabold mb-5 tracking-wide">Personnage</h2>
          <a href="/personnage.html"><button class="bg-white text-amber-700 font-semibold px-6 py-2 rounded-full hover:bg-amber-900 hover:text-white transition duration-300">Voir</button></a>
        </div>
      </div>

      <div class="relative bg-amber-500 pt-20 pb-10 px-8 rounded-3xl shadow-xl text-white w-80 hover:bg-amber-600 transition-transform duration-300">
        <img class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-49 h-45 rounded-2xl shadow-lg border-4 border-white" src="/src/image/trans.webp" alt="Personnage">
        <div class="mt-25 text-center">
          <h2 class="text-2xl font-extrabold mb-5 tracking-wide">Transformations</h2>
          <button class="bg-white text-amber-700 font-semibold px-6 py-2 rounded-full hover:bg-amber-900 hover:text-white transition duration-300">Voir</button>
        </div>
      </div>

      <div class="relative bg-amber-500 pt-20 pb-10 px-8 rounded-3xl shadow-xl text-white w-80 hover:bg-amber-600 transition-transform duration-300">
        <img class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-49 h-45 rounded-2xl shadow-lg border-4 border-white" src="/src/image/planet.webp" alt="Personnage">
        <div class="mt-25 text-center">
          <h2 class="text-2xl font-extrabold mb-5 tracking-wide">Planet</h2>
          <button class="bg-white text-amber-700 font-semibold px-6 py-2 rounded-full hover:bg-amber-900 hover:text-white transition duration-300">Voir</button>
        </div>
      </div>
    </section>


`






setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)