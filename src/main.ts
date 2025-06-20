import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import { DragonBall } from '/personage.ts';

document.addEventListener('DOMContentLoaded', () => {
  new DragonBall();
});



document.querySelector<HTMLDivElement>('#header')!.innerHTML = `
  <header class="bg-amber-500 pt-1 pb-15">
      <img class="w-60 -mt-16 -ml-6 absolute" src="/src/image/textelogo.png">

      <nav class="absolute w-full -mt-3 -ml-10">
        <ul class="flex justify-center gap-x-20 mt-4">
          <a href="/index.html"><li class="rounded-2xl bg-amber-700 px-5 py-2 text-white font-black text-2xl hover:bg-amber-900">
            Accueil
          </li></a>
          <a href="/personnage.html"><li class="rounded-2xl bg-amber-700 px-5 py-2 text-white font-black text-2xl hover:bg-amber-900">
            Personnage
          </li></a>
          <a href="/personnage.html"><li class="rounded-2xl bg-amber-700 px-5 py-2 text-white font-black text-2xl hover:bg-amber-900">
            Transformation
          </li></a>
        </ul>
      </nav>

      <img class="absolute w-20 ml-47" src="/src/image/dragon.png">
    </header>
`
document.querySelector<HTMLDivElement>('#section')!.innerHTML = `
    <section class="flex justify-center gap-80 mt-120">

      <div class="relative bg-amber-500 pt-10 pb-24 px-6 rounded-2xl hover:bg-amber-600 w-[250px] shadow-lg hover:shadow-2xl transition-all duration-300">
        <img class="rounded-2xl w-[200px] mx-auto" src="/src/image/imagePersonage.png" alt="Personnage">
        <h2 class="text-3xl text-white font-black text-center mt-6">Personnage</h2>
      </div>

      <div class="relative bg-amber-500 pt-10 pb-24 px-6 rounded-2xl hover:bg-amber-600 w-[250px] shadow-lg hover:shadow-2xl transition-all duration-300">
        <img class="rounded-2xl w-[200px] mx-auto" src="/src/image/imagePlanet.png" alt="Personnage">
        <h2 class="text-3xl text-white font-black text-center mt-6">Planet</h2>
      </div>

      <div class="relative bg-amber-500 pt-10 pb-24 px-6 rounded-2xl hover:bg-amber-600 w-[250px] shadow-lg hover:shadow-2xl transition-all duration-300">
        <img class="rounded-2xl w-[200px] mx-auto" src="/src/image/imageTransformation.png" alt="Personnage">
        <h2 class="text-3xl text-white font-black text-center mt-6 -ml-2">Transformation</h2>
      </div>

    </section>
`






setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)