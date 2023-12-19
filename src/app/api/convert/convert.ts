import { ErrorCause } from '@/types/errorCause.enum';
import { Input } from '@/types/input.interface';
import { Output } from '@/types/output.interface';

export const convert = (inputs: Input[]): Output[] => {
  const sortedInputs = inputs
    .sort((a, b) => Number(a.entryId) - Number(b.entryId))
    .sort((a, b) => a.path.length - b.path.length);

  const output: Output[] = [];

  sortedInputs.forEach((input) => {
    let currentDirectory = output;

    input.path.forEach((path, index) => {
      const lastPath = index === input.path.length - 1;

      if (lastPath) {
        currentDirectory.push({
          entryId: Number(input.entryId),
          fullPath: input.path.join('/'),
          currentPath: path,
          children: [],
        });
      } else {
        const itemCurrentPath = currentDirectory.find(
          (item) => item.currentPath === path
        );
        if (!itemCurrentPath) {
          throw new Error(
            `Path ${input.path
              .filter((_, i) => i <= index)
              .join('/')} not found`,
            {
              cause: ErrorCause.ENTRY_NOT_FOUND,
            }
          );
        }
        currentDirectory = itemCurrentPath.children;
      }
    });
  });

  return output;
};
