/* globals describe it expect */
const Intinerary = require('../src/Itinerary');

describe('Intinerary constructor function', () => {
  it('can be instantiated', () => {
    expect(new Intinerary()).toBeInstanceOf(Object);
  });

  it('can have ports', () => {
    const nice = jest.fn();
    const monaco = jest.fn();
    const intinerary = new Intinerary([nice, monaco]);
    expect(intinerary.ports).toEqual([nice, monaco]);
  });
});
