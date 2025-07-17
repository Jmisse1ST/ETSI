import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const horas = [
  {
    horas: "17:15 -18:00",
    Segunda: "Programacao 1",
    Terca: "Logica Computacional",
    Quarta: "Programacao 1",
    Quinta: "Probabilidade Estatística",
    Sexta: "Analise Matematica 2",
  },
  {
    horas: "18:00 - 18:45",
    Segunda: "Programacao 1",
   Terca: "Lógica Computacional",
    Quarta: "`Programação 1",
    Quinta: "Probabilidade Estatística",
    Sexta: "Análise Matemática 2",
  },
  {
    horas: "18:50 - 19:35",
    Segunda: "Inglês 2",
    Terca: "Probabilidade Estatística",
    Quarta: "Inglês 2",
    Quinta: "Lógica Computacional",
    Sexta: "Programação 1",
  },
  {
    horas: "19:35 - 20:20",
    Segunda: "Inglês 2",
     Terca: "Probabilidade Estatística",
    Quarta: "Inglês 2",
    Quinta: "Lógica Computacional",
    Sexta: "Programação 1",
  },
  {
    horas: "20:30 - 21:15",
    Segunda: "Arquitetura de Computadores",
    Terca: "Meteorologia de Pesquisa",
    Quarta: "Analise Matematica 2",
    Quinta: "Meteorologia de Pesquisa",
    Sexta: "Arquitetura de Computadores",
  },
  {
    horas: "21:15 - 22:00",
    Segunda: "Arquitetura de Computadores",
    Terca: "Meteorologia de Pesquisa",
    Quarta: "Analise Matematica 2",
    Quinta: "Meteorologia de Pesquisa",
    Sexta: "Arquitetura de Computadores",
  },
  
]

function PrimeiroPosLaboral() {
  return (
    <Table>
      <TableCaption>POS-LABORAL : Sala 2 & Anfiteatro 1</TableCaption>
      <TableHeader className="">
        <TableRow>
          <TableHead className="w-[100px] text-sky-400">horas</TableHead>
          <TableHead className="text-sky-400">Segunda-Feira</TableHead>
          <TableHead className="text-sky-400">Terca-Feira</TableHead>
          <TableHead className="text-sky-400">Quarta-Feira</TableHead>
          <TableHead className="text-sky-400">Quinta-Feira</TableHead>
          <TableHead className="text-sky-400">Sexta-Feira</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {horas.map((horas) => (
          <TableRow key={horas.horas}>
            <TableCell className="font-medium ">{horas.horas}</TableCell>
            <TableCell>{horas.Segunda}</TableCell>
            <TableCell>{horas.Terca}</TableCell>
            <TableCell>{horas.Quarta}</TableCell>
            <TableCell>{horas.Quinta}</TableCell>
            <TableCell>{horas.Sexta}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default PrimeiroPosLaboral;

