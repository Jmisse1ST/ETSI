const Home = () => {
    return(
        <><TypographyH1 /></>
    )
}

export default Home;


export function TypographyH1() {
  return (
    
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-sky-400">
        <br />
      Seja Bem Vindo a Lib-UJC, O seu Repositório Acadêmico.
    </h1>
  )
}


/*Como uma aplicação React, a pagina Home serve como ponto de entrada para a aplicação. 
Ele renderiza o componente HomeHeader que sera aqui abaixo criado que sera o responsável
 por exibir o cabeçalho da página inicial. So tera um unico link (Faculdades no HomeHeader) como ponto de entrada para a 
aplicação.*/

//Tera um pequeno <H> de boas vindas a UNILIB uma <P texto> 
// Futuramente essa primeira pagina tambem sera responsavel por exibir os eventos da UNILIB.

//Depois de escolher a faculdade, o usuario sera levado a pagina de Meterial (Onde tera acesso as restantes funcionaides 
// do APlicativo).
//  Ex: Bem vindo a UiniLib-UJC (A pagina material tera uma barra de pesquisa e os materias da faculdade selecionada,)

//Penso que o footer podera ser colocado somente nesta pagina(Home.tsx) e na paina Sobre.tsx,
// Que seja um footer simples, somente com copyright e o nome da UNILIB. e redes sociais.(Linkdin, Talvez E-mail ou Whatsapp)
// Ou pode ser colocado somente na pagina Sobre.tsx.

//Apenas anotando as ideias para.
//Creio que so dara para lancar no Quarta Feira. Visto que hoje ja e domingo.
//Nao coloquei links, usei testes unitarios para testas as  paginas ja "criadas".