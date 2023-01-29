(function exportIntinerary() {
class Intinerary {
  constructor(ports) {
    this.ports = ports;
  }
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Intinerary;
} else {
  window.Intinerary = Intinerary;
}
})();


