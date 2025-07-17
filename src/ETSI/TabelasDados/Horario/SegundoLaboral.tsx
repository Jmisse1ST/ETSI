
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
    horas: "07:00 - 07:45",
    Segunda: "Programacao 1",
    Terca: "Logica Computacional",
    Quarta: "rogramacao 1",
    Quinta: "Metedologia de Pesquisa",
    Sexta: "Teste",
  },
  {
    horas: "07:45 - 08:30",
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  {
    horas: "08:35 - 09:20",
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  {
    horas: "09:20 - 10:05",
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  {
    horas: "10:25 - 11:10",
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  {
    horas: "11:15 - 12:00",
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  
]

function SegundoLaboral() {
  return (
    <Table>
      <TableCaption>LABORAL</TableCaption>
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

export default SegundoLaboral;

