const { sum } = require("./sum"); // Importamos usando require

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3); // Verificamos que sum(1,2) devuelve 3
});
