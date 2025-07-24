
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


const cadeira = [
  {
    cadeira: "-",
    teste1: "Sem data",
    teste2: "Sem data",
  },
  {
    cadeira: "-",
    teste1: "Sem data",
    teste2: "Sem data",
  },
  {
    cadeira: "-",
    teste1: "Sem data",
    teste2: "Sem data",
  },
  {
    cadeira: "-",
    teste1: "Sem data",
    teste2: "Sem data",
  },
  {
    cadeira: "-",
    teste1: "Sem data",
    teste2: "Sem data",
  },
  {
    cadeira: "-",
    teste1: "Sem data",
    teste2: "Sem data",

  },
  
]

function SegundoPosLaboral() {
  return (
    <Table>
      <TableCaption>LABORAL :</TableCaption>
      <TableHeader className="">
        <TableRow>
          <TableHead className="w-[100px] text-sky-400">Cadeiras</TableHead>
          <TableHead className="text-sky-400">Teste - 1</TableHead>
          <TableHead className="text-sky-400">Teste - 2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cadeira.map((cadeira) => (
          <TableRow key={cadeira.cadeira}>
            <TableCell className="font-medium ">{cadeira.cadeira}</TableCell>
            <TableCell>{cadeira.teste1}</TableCell>
            <TableCell>{cadeira.teste2}</TableCell>
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

export default SegundoPosLaboral;

