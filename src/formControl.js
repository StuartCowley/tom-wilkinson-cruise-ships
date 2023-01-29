const formElem = document.querySelector('#addPorts');
formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElem);
  console.log(formData.get('portNames'));
});

formElem.addEventListener('formdata', (e) => {
  console.log('form data fired');
  const formData = e.formData;
  for (const value of formData.values()) {
    if (value === '') {
      controller.renderMessage('A port cannot be added without a name');
      return 0;
    }
    if (
      itinerary.ports.length > 0 &&
      value === itinerary.ports[itinerary.ports.length - 1].name
    ) {
      controller.renderMessage(
        `You are already docked at ${ship.currentPort.name}`
      );
      return 0;
    }

    controller.addNewPort();
    controller.headsUpDisplay();
    document.getElementById('portName').value = '';
    if (ship.itinerary.ports.length === 1) {
      controller.renderShip();
      ship.dock();
      controller.renderMessage(`Now docked at ${ship.currentPort.name}`);
    }
  }
});
