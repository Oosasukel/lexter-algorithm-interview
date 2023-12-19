import { ErrorCause } from '@/types/errorCause.enum';
import { convert } from './convert';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const data = searchParams.get('data');
  if (!data) return Response.json([]);

  const input = JSON.parse(data);
  try {
    const output = convert(input);
    return Response.json(output);
  } catch (err) {
    if (err instanceof Error) {
      if (err.cause === ErrorCause.ENTRY_NOT_FOUND) {
        return Response.json(null, {
          status: 400,
          statusText: err.message,
        });
      } else {
        return Response.json(null, {
          status: 400,
          statusText: 'Incorrect input format',
        });
      }
    }

    return Response.json(null, { status: 500 });
  }
}
