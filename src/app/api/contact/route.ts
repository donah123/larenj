import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, service } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database (Vercel Postgres, KV, etc.)
    // 2. Send email notification
    // 3. Integrate with CRM system

    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, message, service });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry. We will contact you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}