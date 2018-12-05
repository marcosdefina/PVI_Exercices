# Progamação Voltada à Internet - Projeto Final
A ideia nesse projeto é desenvolver uma plataforma, composta por um front-end em Angular e um WebService em Spring, para comportar os exercícios requeridos pelo Professor Dr. Odemir Martinez Bruno, na matéria 7600068.2018.2.01 no Instituto de Física de São Carlos.

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="Content-Style-Type" content="text/css" />
  <meta name="generator" content="pandoc" />
  <meta name="author" content="Lista de Exercícios" />
  <title>Programação Voltada a Internet 2018</title>
  <style type="text/css">code{white-space: pre;}</style>
</head>
<body>
<div id="header">
<h1 class="title">Programação Voltada a Internet 2018</h1>
<h2 class="author">Lista de Exercícios</h2>
</div>
<h1 id="html">HTML</h1>
<p>Exercício 1 - Faça um site com ao menos seis páginas. Cada página deve ter uma ou mais imagens e um link para as outras páginas.</p>
<p>Exercício 2 - Faça uma página apresenta 3 formas diferentes de usar tabelas em HTML.</p>
<p>Exercício 3 - Faça uma página HTML que utilize formatação com CSS.</p>
<h1 id="cgi-bin">CGI-BIN</h1>
<p>Exercício 1 - Utilizando (C, BASH e Python), faça um script cgi-bin que apresente todos os processos que estão sendo executados por um usuários.</p>
<p>Exercício 2 - Utilizando (C, BASH e Python), faça um script cgi-bin que apresente todos os usuários que estão logados no servidor.</p>
<p>Exercício 3 - Utilizando (C, BASH e Python), faça um script cgi-bin que apresente a quantidade de memória RAM e a porcentagem de processador utilizado no servidor.</p>
<p>Exercício 4 - Faça um script cgi-bin que liste um diretório informado pelo usuário (Deve ser utilizado formulário HTML).</p>
<p>Exercício 5 - Faça um script cgi-bin que rode um programa linux (deve ser um programa escrito por você) e que exiba o resultado de sua execução na página web.</p>
<h1 id="php">PHP</h1>
<p>Exercício 1 - Faça um contador de visitas em PHP</p>
<p>Exercício 2 - Faça uma função em PHP que apresente a maior quantidade de informações possíveis sobre o usuário (IP, Navegador, Sistemas operacional, horário de acesso servidor, horário de acesso local e servidor, linguagem e etc).</p>
<h1 id="php-banco-de-dados---sqllite">PHP + Banco de Dados - SqlLite</h1>
<p>Exercício 1 - Adapte o sistema classificados dado em aula para que armazene os dados no banco de dados SQLlight.</p>
<p>Exercício 2 - Acrescente um módulo de administração ao sistema classificados do exercício 1, de modo que seja possível ter um administrador. O administrador poderá apagar ou alterar os anúncios do sistema. Cada anúncio publicado deverá entrar em uma fila de espera e será publicado somente após a autorização do administrador.</p>
<p>Exercício 3 - Adicione os sistema classificado uma funcionalidade, onde o administrador informa a validade dos anúncios em dias. A validade em dias é uma informação global, por exemplo, se for 30 dias. Todos os anúncios devem ser removidos do sistema após 30 dias de sua publicação. Faça com que o sistema verifique a cada visita se existe algum anúncio expirado e neste caso, que seja removido pelo sistema.</p>
<p>Exercício 4 - Concurso de fotos. Apresente o sistema de concurso de fotos, conforme a especificação dada em aula.</p>
<p>Exercício 5 - Sistema para aulas. Faça um sistema para controlar a frequência e as notas para auxiliar o professor. O sistema tem uma parte feita para o professor com acesso perante senha. O professor pode cadastrar os cursos que ministra aula e os alunos. O professor acessa o curso e pode inserir presença ou falta para os alunos em um dia de aula. O professor determina o número de avaliações e insere o conteúdo de cada uma. O professor pode listar todos os alunos de cada curso ou mesmo todos os alunos e nesta listagem ver, como estão as notas e frequências dos alunos e quais foram reprovados ou aprovados. Cada aluno tem uma senha e pode acessar o sistema mediante senha. Os alunos podem ver suas notas e suas frequências, se estão aprovados ou não e a média de notas e frequência de sua turma.</p>
<h1 id="javascript-processing">JavaScript + Processing</h1>
<p>Exercício 1 - Faça uma página Web, que apresente uma estrela rotacionando em movimento continuo, como feito em aula. A estrela deve poder percorrer todo o espaço útil da página web. Ao clicar na tela, a estrela deve se movimentar até a coordenada do mouse.</p>
<p>Exercício 2 - Adicione ao exercício 1 a possibilidade de enviar variáveis informadas pelo método GET, que deve ser informada pela URL. Ela deve conter o número de pontas da estrela (3,4,5,6,7, etc), o tamanho da estrela e a cor da estrela.</p>
<p>Exercício 3 - Página onde estou. Faça uma página web, em que o script em javascript capture a coordenada do GPS do dispositivo utilizado para acessa-la (computador, tablet ou celular). Esta informação deve ser informada ao google maps e apresentada dentro da página desenvolvida. Deve haver na página um botão atulaizar. Caso seja pressionado, a posição do GPS deve ser atualizada.</p>
<p>Exercício 4 - Faça uma página na Web para resolver a equação de segundo grau. O usuário deve entrar os parâmetros a, b e c. Deve ser apresentado as soluções da equação, caso houver, e a coordenada do pico ou vale da parábola. Deve ser apresentado um gráfico cartesiano, apresentando a função de segundo grau e o gráfico deve apresentar dois pontos destacados onde são as raízes da função.</p>
<h1 id="sistema-completo---server-client">sistema completo - server + client</h1>
<p>1 - Rastreador. Faça uma página (converter em aplicativo para celular, como visto em aula) em que apresente para o usuário um botão para ativar sua posição e um botão para desativar. Quando o botão está ativo, é apresentada informações ao usuário (sua localização), nesta condição o app envia, a cada um minuto, ao servidor o id do usuário e a suas coordenadas latitude e longitude. No lado do servidor deverá ter uma página, que recebe as informações dos apps e as armazena em um banco de dados. No sistema os usuários são cadastrados e junto ao cadastro é informado o seu id. O id deve ser informado ao app que envia as informações. Na visão do usuário ele pode escolher um período de tempo em que deseja visualizar as suas coordenadas no mapa. Por exemple se ele escolher o período de 1 dia em 20 de Outubro de 2018, deve ser apresentando um mapa (google maps) mostrando suas posições neste período. No mapa os pontos de cada coordenada devem estar destacados em vermelho e linkados por uma linha. O primeiro ponto do histórico e o último, devem ter uma coloração distinta indicando início e fim do percurso. O usuário pode ver também os percursos de outros usuários (amigos) que autorizaram a visualização.</p>
<h1 id="exercício-livre">Exercício livre</h1>
<p>Proponha e desenvolva um sistema completo (HTML + cgi-gin + PHP + SQL + Javascript). A criatividade será avaliada neste exercício.</p>
<h1 id="ajuda-para-apresentar-o-código">Ajuda para apresentar o código</h1>
<pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt; //apenas no programa 1

#include &lt;sys/types.h&gt;
#include &lt;unistd.h&gt;</code></pre>
<pre><code>int main(void){

        pid_t PID;          // pid_t eh um data type integer
        pid_t PPID;

        PID = getpid();     // pega o pid do processo
        PPID = getppid();   // pega o pid do pai do processo

        printf(&quot;%d says: My father&#39;s PID is: %d&quot;,PID, PPID);

        system(&quot;./b.out&quot;); // programa 2

        return 0;
}</code></pre>
<pre><code>int main(void){

    pid_t PID;
    pid_t PPID;

    PID = getpid();
    PPID = getppid();

    printf(&quot;%d says: My father&#39;s PID is: %d \n&quot;, PID, PPID);

    return 0;
}</code></pre>
</body>
</html>

