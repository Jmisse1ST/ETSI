import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AlertaSemHorario } from "@/Section/Alerta"



const HorarioRID
 = () => {
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
                
          </p>
          <p>
                               
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
             
          </p>
          <p>
              
          </p>
        </AccordionContent>
        
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Quarto Ano</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
         <p>
              
          </p>
          <p>
                     
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

export default HorarioRID;