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
    Segunda: "Gestão de SI",
    Terca: "Laboratório Eng. De Software",
    Quarta: "Gestão de SI",
    Quinta: "Paradigma de Programação",
    Sexta: "Eng. De Software",
  },
  {
    horas: "18:00 - 18:45",
    Segunda: "Gestão de SI",
    Terca: "Laboratório Eng. De Software",
    Quarta: "Gestão de SI",
    Quinta: "Paradigma de Programação",
    Sexta: "Eng. De Software",
  },
  {
    horas: "18:50 - 19:35",
    Segunda: "Eng. De Software",
    Terca: "A. De Sistemas LINUX",
    Quarta: "Eng. De Software",
    Quinta: "Laboratório Eng. De Software",
    Sexta: "P. Orientanda a Objectos Avançada",
  },
  {
    horas: "19:35 - 20:20",
    Segunda: "Eng. De Software",
    Terca: "A. De Sistemas LINUX",
    Quarta: "Eng. De Software",
    Quinta: "Laboratório Eng. De Software",
    Sexta: "P. Orientanda a Objectos Avançada",
  },
  {
    horas: "20:30 - 21:15",
    Segunda: "Paradigma de Programação",
    Terca: "P. Orientanda a Objectos Avançada",
    Quarta: "P. Orientanda a Objectos Avançada",
    Quinta: "A. De Sistemas LINUX",
    Sexta: "Gestão de SI",
  },
  {
    horas: "21:15 - 22:00",
    Segunda: "Paradigma de Programação",
    Terca: "P. Orientanda a Objectos Avançada",
    Quarta: "P. Orientanda a Objectos Avançada",
    Quinta: "A. De Sistemas LINUX",
    Sexta: "Gestão de SI",
  },
  
]

function TerceiroPosLaboral(){
  return (
    <Table>
      <TableCaption>ENGENHARIA DE SOFTWARE : Laboratório & Sala: 3 R/C</TableCaption>
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

export default TerceiroPosLaboral;

