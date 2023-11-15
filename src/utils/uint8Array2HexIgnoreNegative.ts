import { bigInt2Hex } from './bigInt2Hex';
import { uint8Array2BigInt } from './uint8Array2BigInt';

/**
 * Convert Uint8Array to hex and make result positive.
 */
export function uint8Array2HexIgnoreNegative(bytes: Uint8Array): string {
  return bigInt2Hex(uint8Array2BigInt(bytes));
}
