/* globals describe it expect */
const Port = require('../src/Port');

describe('Port', () => {
  let cartagena;
  let ship;

  beforeEach(() => {
    cartagena = new Port('Cartagena');
    ship = jest.fn();
  });

  describe('Port Constructor with a name and ships stored within', () => {
    it('creates an instance of port as an object', () => {
      expect(cartagena).toBeInstanceOf(Object);
    });

    it('assigns a name property to the port', () => {
      expect(cartagena.name).toMatch('Cartagena');
    });

    describe('Port Constructor with a name and ships stored within', () => {
      it('can add a ship to the ship array property', () => {
        cartagena.addShip(ship);
        expect(cartagena.ships).toContain(ship);
      });
    });

    it('can remove a ship to the ship array property', () => {
      cartagena.addShip(ship);
      cartagena.removeShip(ship);
      expect(cartagena.ships).not.toContain([ship]);
    });

    it('throws error if no ship to remove', () => {
      cartagena.addShip(ship);
      cartagena.removeShip(ship);
      expect(() => cartagena.removeShip(ship)).toThrowError(
        'No ships with that name are currently docked'
      );
    });
  });
});
