import Footer from "@/Section/Footer"
import { sobreData } from "@/constants/Sobre"

const Sobre = () => {
  return (
    <section className="min-h-screen mt-10 bg-white flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-5 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 
         bg-gradient-to-tr from-cyan-300 to-blue-900 bg-clip-text text-transparent        
        ">Sobre o UniLib</h1>
        {sobreData.map((item, idx) => (
          <div className="mb-8 bg-gradient-to-bl from-zinc-50 to-zinc-300 px-5 py-5 rounded-2xl hover:scale-105 transition-all
          
          
          " key={idx}>
            <h2 className="text-xl font-semibold mb-2 

            bg-gradient-to-tr from-cyan-300 to-blue-900 bg-clip-text text-transparent
            
            ">{item.titulo}</h2>
            <p className="text-black">{item.texto}</p>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  )
}

export default Sobre