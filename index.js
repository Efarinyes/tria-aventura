const readlineSync = require('readline-sync');

const historia = [
   
        {
            text: "Benvingut, jugues amb nosaltres?",
            si: 1,
            no: 7
        },
        {
            text: "Un senyor petit i eixerit de Santa Coloma, ha d'anar a Madrid decidit, ha de treballar. L'acompanyes en el seu viatge?",
            si: 2,
            no: 7
        },
        {
            text: "El senyor petit i eixerit va cap a Sants a gafar el tren, l'acompanyes?",
            si: 3,
            no: 7
        },
        {
            text: "Compreu els bitllets per anar a Madrid, l'Ave es mes car i us deixa a Atocha, el de tota la vida, mes barat, us deixa a Chamartin. On Aneu? ( si = Atocha, no = Chamartin )",
            si: 5,
            no: 4
        },
        {
            text: "Sou a Chamartin, els hotels son de pena, et quedes?",
            si: 6,
            no: 7
        },
        {
            text: "Sou a Atocha i busqueu taxi per anar al hotel. Segeuixes amb el Sr. Eixerit?",
            si: 6,
            no: 7
    
        },
        {
            text: "El Sr. eixerit i tu us instaleu a l'hotel i demà a buscar a feina. Vols repetr la història?",
            si: 1,
            no:7
        },
        {
            text: "Adeu!!. Si vols repetir la història, prem si!",
            si: 1,
            no: 8
        },
    { text: "Adeu!", si: -1, no: -1 },
];


let paginaActual = 0;


while(paginaActual >= 0 ) {
    console.log(llegirPagina());
    let opcio = demanarOpcio();
    paginaActual = seguentPagina(opcio);

}

function llegirPagina() {
    return historia[paginaActual].text;
}

function demanarOpcio() {
    let resposta = readlineSync.question(` si/no `);
    if (resposta === 'si' ) return true;
    return false;
}

function seguentPagina(eleccio) {
    if(eleccio) return historia[paginaActual].si;
    else return historia[paginaActual].no;
}