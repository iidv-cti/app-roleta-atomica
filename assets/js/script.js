var attachFastClick = Origami.fastclick;
attachFastClick(document.body);

var scale = 1.5,
    back = 'undefined';

t = 0;
voltas = 4;

var modelo = {
    0: 'Modelo Atômico de Rutherford',
    1: 'Modelo Atômico de John Dalton',
    2: 'Passo a vez',
    3: 'Modelo Atômico de Niels Bohr',
    4: 'Modelo Atômico de Thomson',
    5: 'Passo a vez'
};

var r = [
    "123, 91, 41",
    "0, 0, 152",
    "95, 95, 95",
    "0, 128, 1",
    "209, 197, 155",
    "251, 51, 154"
];

var r2 = [
    "123, 81, 21",
    "0, 0, 122",
    "55, 55, 55",
    "0, 98, 0",
    "189, 167, 135",
    "201, 01, 104"
];

var r3 = [
    "72, 30, 0",
    "0, 0, 42",
    "25, 25, 25",
    "0, 38, 0",
    "99, 77, 65",
    "131, 00, 64"
];

var j = 0;
var pergunta = {
    // Rutherford
    0: [
        [
            'A experiência de Rutherford permitiu evidenciar que o modelo de Thomson estava correto? Comente.', 
            'Não a experiência de Rutherford evidenciou que o modelo de Thomson estava incorreto, pois o resultado indicou que o átomo apresenta mais espaço vazio do que preenchido. '
        ], [
            'O modelo de Rutherford foi considerado o átomo constituído de um núcleo muito pequeno de carga positiva, cercada por elétrons? sim ou não?', 
            'Sim',
            [
                'a. Sim.',
                'b. Não.'
            ]
        ], [
            'Qual foi o modelo que Rutherford desenvolveu?', 
            'c. Sistema Solar',
            [
                'a. Bola de bilhar.',
                'b. Pudim de passas.',
                'c. Sistema solar.',
                'd. Outro.'
            ]
        ], [
            'O átomo de Rutherford foi comparado ao sistema planetário (o núcleo atômico representa o sol e a eletrosfera, os planetas) eletrosfera é a região do átomo que:', 
            'a. Contem as partículas de cargas elétricas positivas', 
            [
                'a. Contem as partículas de cargas elétricas positivas.',
                'b. Contem as partículas de carga elétrica positiva.',
                'c. Contem neutrons.',
                'd. Concentra praticamente toda a massa do átomo.',
                'e. Contem prótons e neutrons.'
            ]
        ], [
            'Na famosa experiência de Rutherford, realizado no início do século XIX, com a lâmina de ouro, o fato que (isoladamente ou em conjunto) indicava que o átomo possuía um núcleo pequeno e positivo foi:', 
            'c. Um pequeno número de partículas alfa atravessando a lâmina sofria desvio de sua trajetória.',
            [
                "a. A maioria das partículas alfas atravessava os átomos da lâmina sem sofrer desvio de sua trajetória.",
                "b. Ao atravessar a lâmina, uma maioria de partículas alfa sofria de sua trajetória.",
                "c. Um pequeno número de partículas alfa atravessando a lâmina sofria desvio de sua trajetória.",
                "d. Um grande número de partículas alfa não atravessou a lâmina",
                "e. As partículas alfa teriam cargas negativas."
            ]
        ], [
            'O modelo de Rutherford, foi elaborado a partir de experimentos em que uma fina lâmina de ouro era bombardeada com partículas alfa.', 
            'a. Sim',
            [
                "a. Sim.",
                "b. Não."
            ]
       ], [
            'As afirmativas a seguir são relacionadas à eletrosfera proposta por Rutherford, qual está correta?', 
            'c. Região de menor proporção do átomo.',
            [
                "a. Região que apresenta carga negativa.",
                "b. Região praticamente sem massa.",
                "c. Região de menor proporção do átomo.",
                "d. Região onde localizam os elétrons."
            ]
       ]
    ],

    // Dalton
    1: [
        [
            'O modelo atômico de Dalton inclui a noção de:', 
            'b. Massa atômica', 
            [
                'a. Eletrosfera.',
                'b. Massa atômica.',
                'c. Núcleo.',
                'd. Órbita.',
                'e. Quantização de energia.'
            ]
        ],
        [
            'John Dalton dizia: A matéria seria formada por pequenas partículas esféricas, maciça. (Algo que não é oco, mas que é compacto) e indivisível, o que seria isso?', 
            'Átomos' 
        ],
        [
            'A fim de explicar o seu modelo atômico, o que Dalton usou para melhor representar sua teoria atômica?', 
            'Bola de bilhar.' 
        ],
        [
            'A teoria atômica de Dalton admite a natureza elétrica da matéria? Comente', 
            'Não+comentário.' 
        ]
    ],

    // Passo a vez
    2: [],

    // Bohr
    3: [
        [
            'Niels Bohr se baseou na teoria atômica de qual cientista?', 
            'Rutherford' 
        ],
        [
            'O modelo de Niels Bohr foi comparado assim como o de Rutherford sendo que mais completo, o seu modelo foi chamado de (sistema planetário) e possuía níveis de energia com camadas eletrônicas que assim como letras maiúsculas para melhor representação das camadas, quantas camadas contêm, e quais as letras representativas:', 
            'São 7 camadas e as letras são K L M N O P Q.' 
        ],
        [
            'O modelo atômico de Bohr introduziu importantes inovações em relação aos modelos anteriores. Entre elas, podemos citar:', 
            'a. A matéria é descontínua', 
            [
                'a. A matéria é descontínua.',
                'b. Existência de neutrons.',
                'c. A matéria possui natureza elétrica.',
                'd. Quantização da energia.',
                'e. Explicação na experiência de Rutherford.'
            ]
        ],
        [
            'De acordo com o modelo de Bohr a luz vista durante o teste de chama é emitida;', 
            'c. Pelos elétrons quando retornam após a excitação, a níveis de menor energia.', 
            [
                'a. Quando os átomos se quebram em vários pedaços.',
                'b. Pelos elétrons quando são promovidos a níveis de menor energia.',
                'c. Pelos elétrons quando retornam após a excitação, a níveis de menor energia.',
                'd. Quando o núcleo do átomo se quebra em dois pedaços devido ao aquecimento.'
            ]
        ],
        [
            'Niels Bohr propôs a seguinte teoria: “As diferentes cores produzidas por distintos elementos são resultados de transições eletrônicas. Ao mudar de camada em torno do núcleo os elétrons emitem energia nos diferentes comprimentos de onda, as cores”. FALSO ou VERDADEIRO:', 
            'Verdadeiro' 
        ],
        [
            'Niels Bohr afirmou alguns postulados, entre eles: A maior parte da massa do átomo se encontra em uma pequena região central entre os (que chamaremos de núcleo) dotado de carga positiva, onde estão os prótons. VERDADEIRO ou FALSA?', 
            'Falsa' 
        ],
        [
            'Segundo o modelo de Bohr quando os átomos de sódio são colocados na chama o calor excita os elétrons SIM ou NÃO?', 
            'Verdadeira, comente.' 
        ]
    ],

    // Thomson
    4: [
        [
            'Houve a necessidade de um novo modelo atômico já que o de Dalton não explicava a existência de cargas elétricas no átomo. Como foi chamada a teoria atômica de J.J. Thomson?', 
            'Pudim de passas.' 
        ],
        [
            'Explique a diferença entre a teoria atômica de Dalton para a de J.J. Thomson.', 
            'O modelo atômico aceito por quase todo o século XIX foi o proposto por Dalton, basicamente se tratava de uma esfera maciça e indivisível, esse modelo não explicava as características elétricas da matéria, O de Thomson continuava esférico como o de Dalton, porém, explicava a natureza elétrica da matéria possuía cargas positivas e negativas.' 
        ],
        [
            'Depois de propor um novo modelo atômico, que continuava esférico como o de Dalton, porém, que explicava a natureza elétrica da matéria, qual o nome do novo modelo de Thomson? Explique:', 
            'Pudim de passas. Para Thomson, o átomo não seria indivisível, como Dalton propôs, mas sim divisível, ou seja, ele possuiria partículas menores de carga negativa, os elétrons, que ficavam distribuídos aleatoriamente sobre uma esfera carregada positivamente. A esfera tinha que ser positiva para neutralizar as cargas negativas dos elétrons, tendo em vista que o átomo é eletricamente neutro.' 
        ],
        [
            'Para que servia o tubo de raios catódicos?', 
            'Quando a alta tensão era ligada, podiam-se observar raios saindo do cátodo e indo em direção ao ânodo. Esses raios foram chamados, então, de raios catódicos.' 
        ],
        [
            'O que Thomson observou no experimento com o tubo de raios catódicos (ampola de Crookes) explique;', 
            'Thomson observou que essas cargas elétricas tinham massa, pois, colocando-se uma ventoinha entre os dois eletrodos, quando os raios catódicos passavam, eles movimentavam a ventoinha, quando se colocava um campo elétrico produzido por placas eletrizadas, esses raios sofriam um desvio e eram atraídos pelo polo positivo do campo elétrico. Isso comprovou que os raios catódicos eram um feixe de partículas negativas.' 
        ],
        [
            'O modelo de Thomson é o primeiro na história da Química a levar em consideração aspectos elétricos. Como é o átomo na concepção desse modelo?', 
            'No modelo de Thomson, o átomo é considerado como uma esfera de carga elétrica positiva na qual há elétrons incrustados. A carga elétrica negativa dos elétrons é contrabalançada pela carga positiva da esfera na qual eles estão e, assim, a carga total do átomo é nula.' 
        ],
        [
            'A realização de experiências com descargas elétricas em tubo de vidro fechado, contendo gás a baixa pressão, produz os raios catódicos. Esses raios são constituídos por um feixe de?', 
            'e. Elétrons.',
            [
                'a. Neutrons.',
                'b. Partículas alfa.',
                'c. Raios X.',
                'd. Prótons.',
                'e. Elétrons.'
            ] 
        ],
        [
            'O átomo na visão de Thomson é constituído de?', 
            'e. Cargas positivas e negativas.',
            [
                'a. Níveis e subníveis de energia.',
                'b. Cargas positivas e negativas.',
                'c. Núcleo e eletrosfera.',
                'd. Grandes espaços vazios.',
                'e. Orbitas.'
            ] 
        ],
    ],
    
    // Passe a vez
    5: []
};

var atual = 0;
var old = 0;
var direcao = 0;
var spinning = 0;

function main(){

    if (spinning == 0) {
        hide("#regras");
        hide("#creditos");
        hide("#jogo");
        show("#main");

        $(".sbd").css("overflow", "hidden");
        $(".section").css("overflow", "hidden");
        back = 'none';
    }

    $(".sbd").css({
        "overflow": "hidden",
        "width": window.innerWidth,
        "height": window.innerHeight
    });
}

function creditos(){
    show("#creditos");
    $(".section").css("overflow", "auto");
    back = 'main';

    $(".sbd").css({
        "overflow": "hidden",
        "width": window.innerWidth,
        "height": window.innerHeight
    });
}

function regras() {
    show("#regras");
    $(".section").css("overflow", "auto");
    back = 'main';
    
    $(".sbd").css({
        "overflow": "auto",
        "width": window.innerWidth,
        "height": window.innerHeight
    });
}

function jogar() {
    hide("#resposta");
    hide("#pergunta");
    show("#jogo");
    
    $(".section").css("overflow", "hidden");

    $(".sbd").css({
        "overflow": "hidden",
        "width": window.innerWidth,
        "height": window.innerHeight
    });

    back = 'main';
}

function resposta(){
    $("#pergunta").animate({ scrollTop: 0 }, 1000);
    show("#resposta");
    back = 'play';
}

function perguntas(){
    $("#pergunta").animate({ scrollTop: 0 }, 1000);
    show("#pergunta");
    back = 'play';
}

function girar(val){
    if ((spinning == 0) && (backActive == 0)){
        spinning = 1;
        if (val == 3) direcao = 1;

        $("#girar").attr("disabled", "true");

        var al = Math.random();
        var opt = (1 / ($(".option").length));
        var r = al / opt;

        if (direcao == 1) {
            var mov = ((Math.round(r) - old) * (360 / ($(".option").length))) + (voltas * 360);
            old = Math.round(r);
            atual = atual + mov;
            $(".roleta").css("transform", " rotate(" + (atual) + "deg) scale(" + scale + ") ");
        }

        if (direcao == 0) {
            var mov = ((Math.round(r) - old) * (360 / ($(".option").length))) - (voltas * 360);
            old = Math.round(r);
            atual = atual + mov;
            $(".roleta").css("transform", " rotate(" + (atual) + "deg) scale(" + scale + ") ");
        }
        console.log(Math.round(r));
        v = Math.round(r);
        var transition = 3000;
        setTimeout(function () {
            setTimeout('spinning = 0;', 1000);
            mostrar(6 - v);
        }, transition);
    }
}

function girarDireita(){
    direcao = 1;
    girar();
}

function girarEsquerda(){
    direcao = 0;
    girar();
}

function mostrar(num){
    if (!pergunta[num]) num = 0;
    $("#girar").removeAttr("disabled");
    $(".section").css("overflow", "auto");
    
    $("#jogo").css("background", 'rgb('+r3[num]+')');
    perguntas();

    $("#pergunta").css("background", 'rgb('+r[num]+')');
    $("#resposta").css("background", 'rgb('+r2[num]+')');

    console.log(num);
    var q = Math.round(Math.random() * (pergunta[num].length - 1));
    $(".modelo").html(modelo[num]);
    if (modelo[num] != 'Passo a vez') {

        opt = '';
        if (pergunta[num][q][2]) {
            for(i = 0; i < pergunta[num][q][2].length; i++){
                opt += "<h4>"+pergunta[num][q][2][i]+"</h4>";   
            }
            console.log(opt);
        }
        
        $("#rbutton").css("display", "block");
        $(".valor").html(pergunta[num][q][0] + opt);
        $(".vresp").html(pergunta[num][q][1]);

    } else {
        $("#rbutton").css("display", "none");
        $(".modelo").html("<div class='c'><div class='ipass material-icons'>loop</div><br/>Passe a vez</div>");
        $(".valor").html("<div class='c'>Passe a vez para o próximo jogador</div>");
    }

    window.scrollTo(0, 0);

}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    setTimeout("navigator.splashscreen.hide()", 500);
    document.addEventListener("backbutton", backDown, false);
    back = 'none';

    show("#main");
}

$(function () {

    show("#main");

    $(".button").on('touchstart', function () {
        $(this).addClass("active");
        $(this).on('touchend', function () {
            $(this).removeClass("active");
        });
    });

    $(".sbd").css({
        "overflow": "hidden",
        "width": window.innerWidth,
        "height": window.innerHeight
    });


    $("img.roletb").css({
        "height": window.innerHeight * 1.2 + "px",
        "width": window.innerWidth + "px"
    });

    width = window.innerWidth;
    height = window.innerHeight;
    bwidth = (width / 2) + (width * 0.08);
    bheight = (width / 4);

    $("img.atomob").css("padding-top", window.innerHeight * 0.1 + 'px');
    $(".container").css("padding-top", window.innerHeight * 0.27 + 'px');

    $(".roleta").css({
        "width": width + "px",
        "height": (bheight * 4) + "px",
        'border-radius': '4000px',
        "left": 0
    })

    $(".option").css({
        "color": "transparent",
        "margin": ' 0',
        "padding": ' 0',
        "left": (window.innerWidth / 2) - (bwidth / 2) + "px"
    })

    $(".option .background").css({
        "border-left": (bwidth / 2) + "px solid",
        "border-right": (bwidth / 2) + "px solid",
        "border-top": (bheight * 2) + "px solid"
    });

    $(".option .text").css({
        "color": "white",
        "width": bwidth + "px",
        "height": (bheight * 2) - (bheight * 0.3) + "px",
        "font-size": (bheight) * 0.2 + "px",
        "padding": (bheight * 0.3) + 'px 0 0 0'
    });

    $(".option .white").css({
        "width": bwidth + "px",
        "height": (bheight * 2) + "px",
        "opacity": 0
    });

    $(".roleta").hammer().bind("swipeleft", girarEsquerda);
    $(".roleta").hammer().bind("swiperight", girarDireita);

    i = 0;
    $(".option").each(function () {
        $(this).css({
            "transform": "rotate(" + i + "deg)"
        });

        $(this).find(".background").css({
            "z-index": -(i + 1),
            "border-top-color": "rgb(" + r[j] + ")"
        });

        i += (360 / ($(".option").length));
        j++;
    });

    $("*").on("touchstart", function () {
        $(this).click();
    });

    $('a').click(function () {
        url = $(this).attr("href");
        if (typeof cordova !== "undefined" && cordova.InAppBrowser) {
            cordova.InAppBrowser.open(url, '_system');
        } else if (typeof navigator !== "undefined" && navigator.app) {
            // Mobile device.
            navigator.app.loadUrl(url, { openExternal: true });
        } else {
            // Possible web browser
            window.open(url, "_system");
        }
        return false;
    });
});

function show(selector){
    $(selector).find(".header .menu").css("z-index", 90);
    $(selector).css({ "z-index": 70, "display": "block" });
    if ($(selector).css("top") != "0px") {
        setTimeout('$("' + selector + '").css({ "top": "0px", "opacity": 1});$("body").css({"width":window.innerWidth+"px", "height": window.innerHeight+"px"})', 100);
    } else if ($(selector).css("top") != "100px") {
        $(selector).css("top", "100px");
        setTimeout('$("' + selector + '").css({ "top": "0px", "opacity": 1});$("body").css({"width":window.innerWidth+"px", "height": window.innerHeight+"px"})', 100);
    }

    /*$(selector).css({ "display": "block" });
    setTimeout('$("'+selector+'").css({"opacity": "1"});', 1);*/
}

function hide(selector){
    $(selector).css({  "top": "100px", "opacity": 0});
    setTimeout('$("'+selector+'").css({"z-index": "0", "display":"none"});', 1000);
    /*$(selector).css("opacity", 0);
    setTimeout('$("'+selector+'").css({"display": "none"});', 1000);*/
}

var backActive = 0;
function backDown(){
    if ((backActive == 0) && (spinning == 0)) {
        backActive = 1;
        setTimeout(function () {
            switch (back) {
                case 'none':
                    back = 'undefined';
                    break;

                case 'play':
                    jogar();
                    break;

                case 'main':
                    main();
                    break;

                default:
                    navigator.app.exitApp();
                    break;

            }

            backActive = 0;
        }, 0);
    }
}