import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AlertaSemHorario } from "@/Section/Alerta"
import PrimeiroLaboral from "@/TabelasDados/PrimeiroLaboral"
import PrimeiroPosLaboral from "@/TabelasDados/PrimeiroPosLaboral"
import QuartoLaboral from "@/TabelasDados/QuartoLaboral"
import QuartoPosLaboral from "@/TabelasDados/QuartoPosLaboral"
import SegundoLaboral from "@/TabelasDados/SegundoLaboral"
import SegundoPosLaboral from "@/TabelasDados/SegundoPosLaboral"
import TerceiroLaboral from "@/TabelasDados/TerceiroLabora"
import TerceiroPosLaboral from "@/TabelasDados/TerceiroPosLaboral"


const Horario = () => {
  return (
    <section className="mt-20">

    <Accordion
      type="single"
      collapsible
      className="w-full p-5 2xl:max-w-[50%]  mx-auto text-center "
      defaultValue="item-1"
      mx-auto = "lg:max-w-[50%]">
      
      <AccordionItem value="item-1">

        <h1 className="text-center gap-2 text-sky-400">Horário</h1>

        <AccordionTrigger>Primeiro Ano</AccordionTrigger> 
        <AccordionContent className="flex flex-col gap-4 text-balance">
          
          <p>
                <PrimeiroLaboral/>
          </p>
          <p>
                <PrimeiroPosLaboral/>                 
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Segundo Ano</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
                 <AlertaSemHorario/>  
          </p>
          <p>
                
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Terceiro Ano</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="">
              <TerceiroLaboral/>
          </p>
          <p>
                <TerceiroPosLaboral/>
          </p>
        </AccordionContent>
        
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Quarto Ano</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
         <p>
              
          </p>
          <p>
                <QuartoPosLaboral/>      
          </p>
        
        </AccordionContent>
        
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Quinto Ano</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
                 <AlertaSemHorario/>  
          </p>
        </AccordionContent>
        
      </AccordionItem>
    </Accordion>
    </section>
  )
}

export default Horario;