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
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  {
    horas: "18:00 - 18:45",
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  {
    horas: "18:50 - 19:35",
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  {
    horas: "19:35 - 20:20",
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  {
    horas: "20:30 - 21:15",
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  {
    horas: "21:15 - 22:00",
    Segunda: "",
    Terca: "",
    Quarta: "",
    Quinta: "",
    Sexta: "",
  },
  
]

function PrimeiroPosLaboral() {
  return (
    <Table>
      <TableCaption>POS-LABORAL</TableCaption>
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

