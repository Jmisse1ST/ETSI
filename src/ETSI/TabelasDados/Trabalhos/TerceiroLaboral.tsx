
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
    trabalho1: "Sem data",
    trabalho2: "Sem data",
    trabalho3: "Sem data",
  },
  {
    cadeira: "-",
    trabalho1: "Sem data",
    trabalho2: "Sem data",
    trabalho3: "Sem data",
  },
  {
    cadeira: "-",
    trabalho1: "Sem data",
    trabalho2: "Sem data",
    trabalho3: "Sem data",
  },
  {
    cadeira: "-",
    trabalho1: "Sem data",
    trabalho2: "Sem data",
    trabalho3: "Sem data",
  },
  {
    cadeira: "-",
    trabalho1: "Sem data",
    trabalho2: "Sem data",
    trabalho3: "Sem data",
  },
  {
    cadeira: "-",
    trabalho1: "Sem data",
    trabalho2: "Sem data",
    trabalho3: "Sem data",

  },
  
]

function TerceiroLaboral() {
  return (
    <Table>
      <TableCaption>LABORAL : </TableCaption>
      <TableHeader className="">
        <TableRow>
          <TableHead className="w-[100px] text-sky-400">Cadeiras</TableHead>
          <TableHead className="text-sky-400">Trabalho - 1</TableHead>
          <TableHead className="text-sky-400">Trabalho - 2</TableHead>
          <TableHead className="text-sky-400">Trabalho - 2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cadeira.map((cadeira) => (
          <TableRow key={cadeira.cadeira}>
            <TableCell className="font-medium ">{cadeira.cadeira}</TableCell>
            <TableCell>{cadeira.trabalho1}</TableCell>
            <TableCell>{cadeira.trabalho2}</TableCell>
            <TableCell>{cadeira.trabalho3}</TableCell>
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

export default TerceiroLaboral;
