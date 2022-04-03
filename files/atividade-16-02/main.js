function mudarCor() {
    var corpo = document.body;
    // variavel cor com o elemento <body>
    var cor = document.getElementById("cor");
    // variavel cor com o elemento <input id="cor">

    corpo.style.background = cor.value;
    /*
     * o estilo do plano de fundo do corpo 
     * é igual ao valor da cor
     * 
     * */
}