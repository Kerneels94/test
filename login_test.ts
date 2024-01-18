Feature('login');

Scenario('test something', ({ I }) => {
  I.amOnPage('http://localhost:3000/login');
  I.see("what")
});
