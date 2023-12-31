import { bigintToUint8, toBigint, uint8ToBigint } from '../src';

describe('Utils', () => {
  test('Test toBigint()', () => {
    expect(toBigint('111010110111100110100010101', 2)).toBe(123456789n);
    expect(toBigint('75bcd15', 16)).toBe(123456789n);
    expect(toBigint('123456789')).toBe(123456789n);
    expect(toBigint(123456789)).toBe(123456789n);
  });
  test.each(bigInt2Uint8ArrayCases())('Test bigInt2Uint8Array: $args', ({ args: [n], expected }) => {
    expect(bigintToUint8(n, true)).toStrictEqual(expected);
  });
  test.each(uint8Array2BigIntCases())('Test uint8Array2BigInt: $args', ({ args: [n], expected }) => {
    expect(uint8ToBigint(n, true)).toBe(expected);
  });
});

function bigInt2Uint8ArrayCases() {
  return [
    {
      args: [123456789n],
      expected: new Uint8Array([7, 91, 205, 21]),
    },
    {
      args: [-123456789n],
      expected: new Uint8Array([248, 164, 50, 235]),
    },
    {
      args: [0n],
      expected: new Uint8Array([0]),
    },
  ]
}

function uint8Array2BigIntCases() {
  return [
    {
      args: [new Uint8Array([7, 91, 205, 21])],
      expected: 123456789n,
    },
    {
      args: [new Uint8Array([248, 164, 50, 235])],
      expected: -123456789n,
    },
    {
      args: [new Uint8Array([0])],
      expected: 0n,
    },
  ];
}
