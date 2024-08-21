import './assets/sass/index.scss'

import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden flex flex-col mt-24">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-white text-center text-2xl md:text-4xl font-thin flex flex-col">
            Olá👋 <span className="text-5xl md:text-7xl font-normal my-3">Meu nome é Renan Costa</span> Desenvolvedor Full Stack
          </h2>
          <button className="btn-cv text-white duration-500">Baixar CV</button>
          <div className="container-links text-white flex gap-7 text-3xl md:text-4xl">
            <a href="#"><i class="fa-brands fa-github"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-solid fa-envelope"></i></a>
          </div>
        </div> 
      </main>
    </>
  )
}

export default App




