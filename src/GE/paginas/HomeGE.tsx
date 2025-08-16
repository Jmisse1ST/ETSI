const HomeGE
 = () => {

    return(
        <>
          <section className="mt-20">

          <TypographyH1 /><InputHome/><AlertHome />
          </section>
        </>

    )
}



export default HomeGE;

export function TypographyH1() {
  return (
  
    <><h5 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance 
   bg-gradient-to-bl from-gray-700 to-sky-800 bg-clip-text text-transparent
    ">
      
      
      <br />
      <EfeitoEscrever/>
      <br/>
      
       <h1 className="text-3xl font-bold text-center mb-8 
         bg-gradient-to-tr from-cyan-300 to-blue-900 bg-clip-text text-transparent        
        ">Seja Bem Vindo a Lib-UJC,  O seu Repositório Acadêmico</h1>
     
    </h5><p className="text-muted-foreground text-sm text-center font-mono">Feito por estudantes para estudantes.</p></>
  )
}

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select"

export function InputHome() {
  return (
    <div className="p-6 flex justify-end gap-4">
      <Input 
        type="email" 
        placeholder="Encontre o teu material" 
        className="flex-[3]
        " 
      />
      
      <Select>
        <SelectTrigger className="flex-[0.3]">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Ano</SelectLabel>
            <SelectItem value="apple">Primeiro</SelectItem>
            <SelectItem value="banana">Segundo</SelectItem>
            <SelectItem value="orange">Terceiro</SelectItem>
            <SelectItem value="grape">Quarto</SelectItem>
            <SelectItem value="mango">Quinto</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
  
    </div>
  )

}

import { CheckCircle2Icon} from "lucide-react"


import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import EfeitoEscrever from "@/Section/EfeitoEscrever";

export function AlertHome() {
  return (
    <div className="grid w-full max-w-xl items-start gap-2
     p-10
     mx-auto mt-30
     "
     >
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Repositório Vazio!!</AlertTitle>
        <AlertDescription className="text-sky-400">
         Poderá baixar as fichas de apoio assim que
          as aulas do segundo semestre iniciarem.
        </AlertDescription>
        <AlertTitle>Boas férias Enginner!!</AlertTitle>
      </Alert>
    
    </div>
  )

}


