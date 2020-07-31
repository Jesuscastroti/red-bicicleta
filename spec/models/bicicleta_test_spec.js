var Bicicleta = require('../../models/bicicleta');
beforeEach (() =>{Bicicleta.allBicis = [];} )
describe('Bicicleta.allBicis', () =>{
    it('comienza vacia',() => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', () =>{
    it('agregar bicicleta',() => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var a = new Bicicleta(1,'rojo','urbana', [-34.563434,-58.232323]);
        Bicicleta.add(a);
        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

describe('Bicicleta.findById',()=>{
    it('debe devolver bicicleta con id 1', ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici1 = new Bicicleta(1, 'verde','urbana',[54.059495,-34.76762]);
        var aBici2 = new Bicicleta(2, 'verde','urbana',[54.059495,-34.76762]);
        Bicicleta.add(aBici1);
        Bicicleta.add(aBici2);
        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);
    });
});