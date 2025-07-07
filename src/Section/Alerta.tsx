import { AlertCircleIcon} from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertaSemHorario() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4 center mx-auto">
      
    
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Sem Horário Disponível!</AlertTitle> 
        <AlertDescription>
          <p>Por favor, consulte diretamente na Faculdade de Ciências e Tecnologias.</p>
           
        </AlertDescription>
      </Alert>
    </div>
  )
}
