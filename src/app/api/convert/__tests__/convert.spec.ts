import { inputList } from '@/input';
import { outputList } from '@/output';
import { Input } from '@/types/input.interface';
import { convert } from '../convert';

describe('Function Convert', () => {
  it('should convert as expected', () => {
    const result = convert(inputList);

    expect(result).toStrictEqual(outputList);
  });

  it('should returns error if some path is missing', () => {
    const invalidInput = inputList.filter((item) => item.entryId !== '1');

    expect(() => convert(invalidInput)).toThrow(
      new Error('Path root1 not found')
    );
  });

  it('should returns error if invalid format', () => {
    expect(() => convert([{}] as Input[])).toThrow();
  });
});
