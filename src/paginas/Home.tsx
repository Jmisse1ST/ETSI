const Home = () => {
    return(
        <><TypographyH1 /><InputDemo /></>
    )
}

export default Home;


export function TypographyH1() {
  return (
    
    <><h5 className="scroll-m-20 text-center text-1xl font-extrabold tracking-tight text-balance text-sky-400">
      <br />
      Seja Bem Vindo a Lib-UJC,  O seu Repositório Acadêmico
    </h5><p className="text-muted-foreground text-sm text-center">Feito por estudantes para estudantes.</p></>

  )
}


import { Input } from "@/components/ui/input"

export function InputDemo() {
  return ( <div className="p-6">
      <Input 
        type="email" 
        placeholder="Encontre o teu material" 
        className="w-full max-w-sm"
      />
    </div>
  )
} 



import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

