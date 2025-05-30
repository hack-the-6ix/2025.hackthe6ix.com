import { NextResponse, NextRequest } from 'next/server';
import z, { ZodError, ZodIssueCode } from 'zod';

export const runtime = 'nodejs';

const schema = z.object({
  email: z
    .string()
    .min(1, 'Please provide an email')
    .email('Please provide a valid email'),
});

export type POSTRequest = z.infer<typeof schema>;

export type POSTResponse =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      error: z.inferFormattedError<typeof schema>;
    };

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const payload = await schema.parseAsync({
      email: formData.get('email'),
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/subscribe`,
      {
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(payload),
      },
    );

    if (!res.ok) {
      const error = await res.text();
      return NextResponse.json(
        {
          status: 'error',
          error: ZodError.create([
            {
              code: ZodIssueCode.custom,
              path: ['email'],
              message: error,
            },
          ]).format(),
        },
        { status: 400, statusText: 'Subscription error' },
      );
    }

    return NextResponse.json({
      status: 'success',
      message: 'Email has been subscribed to updates.',
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          status: 'error',
          error: err.format(),
        },
        { status: 400, statusText: 'Bad payload' },
      );
    } else {
      console.error(err);
      return NextResponse.json(
        {
          status: 'error',
          error: ZodError.create([
            {
              code: ZodIssueCode.custom,
              path: ['email'],
              message: 'Unknown error. Please try again later.',
            },
          ]).format(),
        },
        {
          status: 500,
          statusText: 'Internal server error',
        },
      );
    }
  }
}
