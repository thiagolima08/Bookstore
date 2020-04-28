import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  books = [{
    "id":"1",
    "titulo":"Harry Potter e a Pedra Filosofal 1",
    "preco": 29.99,
    "autor":"Rowling,J. K.",
    "descricao":"Em Harry Potter e a Pedra Filosofal, o leitor é apresentado a Harry, filho de Tiago e Lílian Potter, feiticeiros que foram assassinados por um poderosíssimo bruxo, quando ele ainda era um bebê. Com isso, o menino acaba sendo levado para a casa dos tios que nada tinham a ver com o sobrenatural pelo contrário.",
    "numPaginas":"264",
    "isbn":"9788532511010",
    "ano":"2000",
    "categoria":"infantojuvenil",
    "imageUrl":"https://lojasaraiva.vteximg.com.br/arquivos/ids/12100486-400-400/1007942370.jpg?v=637142216975430000",
    "editora":"Rocco",
    "oferta":true
  },
  {
    "id":"2",
    "titulo":"O Milagre Da Manhã",
    "preco": 39.90,
    "autor":"Elrod, Hal",
    "descricao":"Conheça o método simples e eficaz que vai proporcionar a vida dos sonhos — antes das 8 horas da manhã! Hal Elrod explica os benefícios de acordar cedo e desenvolver todo o nosso potencial e as nossas habilidades. O milagre da manhã permite que o leitor alcance níveis de sucesso jamais imaginados, tanto na vida pessoal quanto profissional. A mudança de hábitos e a nova rotina matinal proposta por Hal vai proporcionar melhorias significativas na saúde, na felicidade, nos relacionamentos, nas finanças, na espiritualidade ou quaisquer outras áreas que necessitem ser aprimoradas.",
    "numPaginas":"196",
    "isbn":"9788576849940",
    "ano":"2016",
    "categoria":"autoajuda",
    "imageUrl":"http://lojasaraiva.vteximg.com.br/arquivos/ids/12107927-400-400/1008997059.jpg?v=637142244051200000",
    "editora":"Best Seller",
    "oferta":true
  },
  {
    "id":"3",
    "titulo":"O Iluminado",
    "preco": 46.26,
    "autor":"King, Stephen",
    "descricao":"Jack Torrence consegue um emprego de zelador em um velho hotel, e acha que será a solução dos problemas de sua família: não vão mais passar por dificuldades, sua esposa não vai mais sofrer e seu filho, Danny, vai poder ter ar puro para se livrar de estranhas convulsões. Mas as coisas não são tão perfeitas como parecem: existem forças malignas rondando os antigos corredores. O hotel é uma chaga aberta de ressentimento e desejo de vingança, e, inevitavelmente, um embate entre o bem e o mal terá de ser travado.",
    "numPaginas":"464",
    "isbn":"9788581050485",
    "ano":"	2012",
    "categoria":"terror",
    "imageUrl":"http://lojasaraiva.vteximg.com.br/arquivos/ids/6976926-400-400/783583.jpg?v=637075325861800000",
    "editora":"Suma De Letras",
    "oferta":true
  },
  {
    "id":"4",
    "titulo":"Probabilidade Aplicações a Estatística",
    "preco": 229.99,
    "autor":"Meyer, Paul L.",
    "descricao":"Muitos tópicos da Matemática podem ser apresentados em diferentes estágios de dificuldade, e isto é verdadeiro no que diz respeito à Probabilidade. Neste livro, faz-se um esforço para tirar proveito da base matemática do leitor, sem a ultrapassar. Este não é, seguramente, um livro de receitas. Muito embora alguns conceitos sejam introduzidos e explicados de maneira não formal, as definições e os teoremas são enunciados cuidadosamente. Quando uma demonstração pormenorizada de um teorema não é factível ou desejável, ao menos um esboço dos conceitos importantes é oferecido. Um traço peculiar deste livro são os Comentários, que se seguem à maioria dos teoremas e definições. De um exame rápido no Resumo, fica evidenciado que cerca de três quartos do livro são dedicados a assuntos probabilísticos, enquanto o último quarto é dedicado a uma explanação da Inferência e Estatística. Nesta 2ª edição, foi feito um esforço para dar maior esclarecimento na relação entre várias distribuições de probabilidade, de modo que o estudante possa alcançar maior compreensão de como diversos modelos probabilísticos podem ser empregados para obter-se a aproximação um do outro. Os editores julgam proveitoso salientar que a resolução de problemas deve ser considerada parte integrante do curso. Somente ao se tornar pessoalmente interessado em propor e resolver os exercícios, poderá realmente o estudante desenvolver uma compreensão e apreciação das ideias e uma familiaridade com as técnicas adequadas. Por isso, mais de 330 problemas foram incluídos no livro e, para mais de metade deles, respostar são dadas ao fim do volume. Além dos problemas propostos ao leitor, há numerosos exemplo resolvidos, espalhados através do livro.",
    "numPaginas":"444",
    "isbn":"9788521602941",
    "ano":"1987",
    "categoria":"didatico",
    "imageUrl":"http://lojasaraiva.vteximg.com.br/arquivos/ids/3243948-400-400/1006580906.jpg?v=637034152123070000",
    "editora":"LTC Exatas Didático",
    "oferta":true
  },
  {
    "id":"5",
    "titulo":"1984",
    "preco": 44.58,
    "autor":"Orwell, George",
    "descricao":"Ao lado de “A Revolução dos Bichos”, o livro “1984” é um dos mais famosos de George Orwell. A obra já ganhou versões de filmes, minisséries, quadrinhos, traduções para 65 países e uma polêmica fama, que não é à toa! Em seu último romance, o autor criou um personagem chamado Winston, que vive aprisionado em uma sociedade completamente dominada pelo Estado. Essa submissão ao poder, é relatada, inclusive, na rotina desse personagem, que trabalha com a falsificação de registos históricos, a fim de satisfazer os interesses presentes. Winston, contudo, não aceita bem essa realidade, que se disfarça de democracia, e vive questionando a opressão que o Partido e o Grande Irmão exercem sob a sociedade. A inspiração do livro vem dos regimes totalitários das décadas de 30 e 40 e, é assim, sob a ótica da ficção, que o autor faz com que seus leitores reflitam sobre o sistema de controle, que depois de tanto tempo ainda é muito questionado.",
    "numPaginas":"416",
    "isbn":"9788535914849",
    "ano":"2009",
    "categoria":"romance",
    "imageUrl":"http://lojasaraiva.vteximg.com.br/arquivos/ids/12101548-400-400/1008972955.jpg?v=637142220125430000",
    "editora":"Companhia Das Letras",
    "oferta":true
  },
  {
    "id":"6",
    "titulo":"C++ Absoluto",
    "preco": 165.90,
    "autor":"Savitch, Walter",
    "descricao":"C++ Absoluto é um livro-texto que fornece todas as ferramentas necessárias para programadores experientes ou iniciantes tornarem-se verdadeiros experts em C++. Escrito em uma linguagem agradável e flexível, enfatiza as características e complexidades da linguagem C++, sem deixar de lado as técnicas básicas de programação. Neste livro você encontra: - Programas completos e executáveis, distribuídos ao longo do texto, para demonstrar características e recursos da linguagem. - Introdução à Linguagem Unificada de Modelagem (UML) e um capítulo inteiro sobre Recursão. - Ampla abordagem da Standard Template Library (STL) - uma coleção de bibliotecas de classes de estrutura de dados pré-programados -, bem como da programação orientada a objetos (OOP). - Quadros com resumos da sintaxe do C++, com dicas de programação e com as armadilhas mais comuns, para melhorar o desempenho e o aprendizado dos programadores. C++ Absoluto ainda oferece, no site do livro, um suplemento completo para professores e estudantes, incluindo manual do professor (em inglês), transparências em PowerPoint (em português) e os códigos-fonte.",
    "numPaginas":"624",
    "isbn":"9788588639096",
    "ano":"2003",
    "categoria":"informatica",
    "imageUrl":"http://lojasaraiva.vteximg.com.br/arquivos/ids/7461121-400-400/522439.jpg?v=637087093981870000",
    "editora":"Pearson Universidades",
    "oferta":true
  }
]

  inputObject:BehaviorSubject<String> = new BehaviorSubject<String>(``);

  getBooks(){
    return this.books;
  }

  getBook(id){
    return this.books[id-1];
  }

  getInput(){
    return this.inputObject;
  }

  setInput(input){
    this.inputObject = new BehaviorSubject<String>(`${input}`);
  }

  constructor() { }
}
