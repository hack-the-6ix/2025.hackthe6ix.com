import { NextResponse, NextRequest } from 'next/server';
import z, { ZodError, ZodIssueCode } from 'zod';

const schema = z.object({
  email: z
    .string()
    .min(1, 'Please provide an email')
    .email('Please provide a valid email'),
  name: z.string().min(1, 'Please provide a name'),
  message: z
    .string()
    .min(1, 'Please provide a message')
    .max(2056, 'Please limit the message to 2056 charaters'),
  captchaToken: z.string().min(1, 'Missing Turnstile token'),
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

// Define the edge function separately
export async function edgeContactApi(payload: POSTRequest) {
  // This function uses edge runtime
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();
    throw ZodError.create([
      {
        code: ZodIssueCode.custom,
        path: ['message'],
        message: error,
      },
    ]);
  }

  return {
    status: 'success',
    message: 'Message has been sent!',
  };
}

// Main route handler
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const payload = await schema.parseAsync({
      captchaToken: formData.get('captchaToken')?.toString(),
      message: formData.get('message')?.toString(),
      email: formData.get('email')?.toString(),
      name: formData.get('name')?.toString(),
    });

    try {
      const result = await edgeContactApi(payload);
      return NextResponse.json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        return NextResponse.json(
          {
            status: 'error',
            error: error.format(),
          },
          { status: 400, statusText: 'Subscription error' },
        );
      }
      throw error;
    }
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
              path: ['message'],
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
