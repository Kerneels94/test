Feature('login');

Scenario('test something', ({ I }) => {
  I.amOnPage('http://localhost');
  I.see("flabergasted")
});
