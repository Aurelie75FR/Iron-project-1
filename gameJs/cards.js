class Cards {
  constructor(img, upValue, downValue, leftValue, rightValue) {
    this.img = img;
    this.upValue = upValue;
    this.downValue = downValue;
    this.leftValue = leftValue;
    this.rightValue = rightValue;
  }
}

const asura = new Cards('img/characters/asura.png', 4, 6, 3, 7);
const bibi = new Cards('img/characters/bibi.png', 5, 10, 6, 8);
const cecil = new Cards('img/characters/cecil.png', 3, 9, 6, 4);
const celes = new Cards('img/characters/celes.png', 10, 9, 7, 5);
const cyan = new Cards('img/characters/cyan.png', 7, 9, 5, 7);
const djidane = new Cards('img/characters/djidane.png', 3, 10, 6, 8);
const edea = new Cards('img/characters/edea.png', 6, 8, 5, 10);
const eiko = new Cards('img/characters/eiko.png', 8, 7, 10, 2);
const exdeath = new Cards('img/characters/exdeath.png', 10, 6, 6, 6);
const gilgamesh = new Cards('img/characters/gilgamesh.png', 10, 10, 2, 3);
const jesters = new Cards('img/characters/jesters.png', 5, 5, 9, 9);
const kain = new Cards('img/characters/kain.png', 4, 10, 8, 4);
const kefka = new Cards('img/characters/kefka.png', 5, 10, 8, 3);
const kuja = new Cards('img/characters/kuja.png', 6, 5, 7, 10);
const kweena = new Cards('img/characters/kweena.png', 8, 6, 8, 4);
const ramuh = new Cards('img/characters/ramuh.png', 10, 5, 10, 6);
const rubicante = new Cards('img/characters/rubicante.png', 4, 8, 8, 3);
const sephiroth = new Cards('img/characters/sephiroth.png', 10, 7, 7, 4);
const yojimbo = new Cards('img/characters/yojimbo.png', 4, 3, 7, 10);

var cards = [
  asura,
  bibi,
  cecil,
  celes,
  cyan,
  djidane,
  edea,
  eiko,
  exdeath,
  gilgamesh,
  jesters,
  kain,
  kuja,
  kefka,
  kweena,
  ramuh,
  rubicante,
  sephiroth,
  yojimbo,
];
