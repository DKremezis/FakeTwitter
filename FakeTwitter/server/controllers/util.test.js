const utils = require('./util');

test("should add two numbers", () => {
    expect(utils.add(33, 11)).toBe(44);
});