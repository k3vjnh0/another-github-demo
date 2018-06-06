(function () {
  function clickHandler(message) {
    console.log(`Hi ... ${message}`);
  }

  const myButton = document.getElementById('myButton');
  myButton.addEventListener('click', () => { clickHandler('hi from iife'); });
}());
