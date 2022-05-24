document.body.onmouseover = function abrirModal() {
    var id = event.target.id

    if ( id== '1') {
        document.getElementById('titulo-modal').innerHTML = "Josse, the Tiger and the Fish."
        document.getElementById('conteudo-modal').innerHTML = "Um drama romântico juvenil com temas de crescimento, a história se concentra no estudante universitário Tsuneo e na sonhadora Josee, que vive sua vida presa em uma cadeira de rodas. Josee - que leva o nome da heroína de Nuvens Maravilhosas de Françoise Sagan - passa a maior parte de seus dias lendo e pintando até que por acaso encontra Tsuneo e decide que é hora de enfrentar o mundo real."
        document.getElementById('modal').style.display = "flex"
    }

    if ( id == '2') {
        document.getElementById('titulo-modal').innerHTML = "Goblin: The Lonely and Great God."
        document.getElementById('conteudo-modal').innerHTML = "A trama gira em torno de Kim Shin (Gong Yoo), um ex-general, agora um Goblin com a graça e o castigo da imortalidade. A única forma de conseguir quebrar esse círculo seria encontrar sua noiva: a única pessoa capaz de liberta-lo para que possa descansar em paz. Ele passa os anos até chegar nos dias atuais, encontrando Ji Eun-Tak (Kim Go-Eun), uma jovem com uma vida triste e que possui o dom de ver fantasmas. Todas as almas com as quais ela interage afirmam que ela é a noiva do Goblin, mas… Será que ela é mesmo?"
        document.getElementById('modal').style.display = "flex"
    }

    if ( id == '3') {
        document.getElementById('titulo-modal').innerHTML = "Vincenzo."
        document.getElementById('conteudo-modal').innerHTML = "Ao visitar sua terra natal, um advogado coreano que trabalha para a máfia italiana se envolve em uma batalha contra um poderoso conglomerado e faz justiça a seu modo."
        document.getElementById('modal').style.display = "flex"
    }

    if ( id  == '4') {
        document.getElementById('titulo-modal').innerHTML = "O Castelo Animado."
        document.getElementById('conteudo-modal').innerHTML = "Uma bruxa lança uma terrível maldição sobre a jovem Sophie transformando-a numa velha de 90 anos. Desesperada, ela embarca numa odisseia em busca do Castelo Andante, onde reside um misterioso feiticeiro que poderá ajudá-la a reverter o feitiço."
        document.getElementById('modal').style.display = "flex"
    }

    if ( id  == '5') {
        document.getElementById('titulo-modal').innerHTML = "A Fada do Levantamento de Peso."
        document.getElementById('conteudo-modal').innerHTML = "Kim Bok Joo, estudante de halterofilismo em uma universidade de educação física, é uma garota que corre muito atrás de seus sonhos e objetivos. Embora pareça ser extrovertida, ela é sensível às críticas. Por coincidência, ela conhece o seu colega de natação Jung Joon Hyung, um gênio da natação não tão sortudo, e os dois começam uma história de amor super romântica."
        document.getElementById('modal').style.display = "flex"
    }

    if ( id  == '6') {
        document.getElementById('titulo-modal').innerHTML = "A Viagem de Chihiro."
        document.getElementById('conteudo-modal').innerHTML = "Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los."
        document.getElementById('modal').style.display = "flex"
    }

    if ( id  == '7') {
        document.getElementById('titulo-modal').innerHTML = "The Witch: Subversion."
        document.getElementById('conteudo-modal').innerHTML = "Uma jovem, Ja-yoon, vive com seus pais adotivos depois que eles a encontraram sozinha na floresta e perto da morte. Quando pessoas estranhas começam a aparecer na vida de Ja-yoon, ela entra em turbulência quando sua vida aparentemente comum vira de cabeça para baixo em um piscar de olhos."
        document.getElementById('modal').style.display = "flex"
    }

    if ( id  == '8') {
        document.getElementById('titulo-modal').innerHTML = "Nosso Eterno Verão."
        document.getElementById('conteudo-modal').innerHTML = "Dois ex-namorados do ensino médio são forçados a se reunir após um documentário que fizeram na escola se tornar viral na internet, dez anos depois."
        document.getElementById('modal').style.display = "flex"
    }

    if ( id  == '9') {
        document.getElementById('titulo-modal').innerHTML = "A Voz do Silêncio."
        document.getElementById('conteudo-modal').innerHTML = "Shouko Nishimiya é uma garota surda que acaba de se mudar para uma nova escola, onde sofre bullying de diversos colegas de classe, incluindo Ishida Shouya. Enquanto cresce, o rapaz se dá conta de que era errado o que fazia e, ao reencontrar a garota por acaso, tenta se redimir não só com ela, mas com todos que feriu por suas atitudes no passado."
        document.getElementById('modal').style.display = "flex"
    }

    if ( id  == '10') {
        document.getElementById('titulo-modal').innerHTML = "Tomorrow."
        document.getElementById('conteudo-modal').innerHTML = "Choi Joon Woong simplesmente não consegue encontrar um emprego, não importa o quanto ele tente. Uma noite, ele acidentalmente entra em contato com dois anjos da morte, Gu Ryeon bem como Im Ryoog Gu, que trabalham para uma equipe de gerenciamento de crises e passa a trabalhar com eles, tentando impedir as pessoas de cometerem suicídio."
        document.getElementById('modal').style.display = "flex"
    }

}

document.body.onmouseout = function fecharModal() {
    document.getElementById('modal').style.display = "none"
}