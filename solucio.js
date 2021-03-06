const readlineSync = require("readline-sync");

const textos = [
  {
    text: "Som a Santa Coloma de Gramanet, població del barcelonès on ens trobem a un Sr. Petit i eixerit que li esperen moltes aventures, ens acompanyes?",
    si: 1,
    no: 7,
  },
  {
    text: "Un senyor petit i eixerit de Santa Coloma, ha d'anar a Madrid decidit, ha de treballar. L'acompanyes en el seu viatge?",
    si: 2,
    no: 7,
  },
  {
    text: "El senyor petit i eixerit va cap a Sants a gafar el tren, l'acompanyes?",
    si: 3,
    no: 7,
  },
  {
    text: "Compreu els bitllets per anar a Madrid, l'Ave es mes car i us deixa a Atocha, el de tota la vida, mes barat, us deixa a Chamartin. On Aneu? ( si = Atocha, no = Chamartin )",
    si: 5,
    no: 4,
  },
  {
    text: "Sou a Chamartin, els hotels son de pena, et quedes?",
    si: 6,
    no: 7,
  },
  {
    text: "Sou a Atocha i busqueu taxi per anar al hotel. Segeuixes amb el Sr. Eixerit?",
    si: 6,
    no: 7,
  },
  {
    text: "El Sr. eixerit i tu us instaleu a l'hotel i demà a buscar a feina. Vols repetr la història?",
    si: 1,
    no: 7,
  },
  {
    text: "Adeu!!. Si vols repetir la història, prem si!",
    si: 1,
    no: 8,
  },
  { text: "Adeu!", si: -1, no: -1 },
];

let posicioActual = 0;

while (posicioActual >= 0) {
  console.log(llegirPagina());
  let opcio = demanarOpcio();
  posicioActual = proximPas(opcio);
}

function llegirPagina() {
  return textos[posicioActual].text;
}

function demanarOpcio() {
  let opcioTriada = readlineSync.question(` si/no `);
  if (opcioTriada === "si") return true;
  return false;
}

function proximPas(eleccio) {
  if (eleccio) return textos[posicioActual].si;
  else return textos[posicioActual].no;
}
