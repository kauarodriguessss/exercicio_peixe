var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
   this.load.image('mar', 'assets/bg_azul-escuro.png');

   this.load.image('logo', 'assets/logo-inteli_branco.png');

   this.load.image('peixe', 'assets/peixes/baiacu.png');

   this.load.image('peixe2', 'assets/peixes/peixinho_rosa.png');

   this.load.image('peixe3', 'assets/peixes/peixe_verde.png');

   this.load.image('peixe4', 'assets/peixes/concha.png');

   this.load.image('peixe5', 'assets/peixes/crustaceo.png');
}

function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5);

    this.add.image(200, 300, 'peixe2').setScale(0.5);

    this.add.image(600, 300, 'peixe3').setScale(0.5);

    this.add.image(100, 100, 'peixe4').setScale(0.5);

    this.add.image(700, 500, 'peixe5').setScale(0.5);

   peixinho = this.add.image(400, 300, 'peixe')
   
   peixinho.setFlip(true, false);
}

function update() {

peixinho.x = this.input.x;
peixinho.y = this.input.y;

}