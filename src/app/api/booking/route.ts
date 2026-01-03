import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, service, message } = body

    // Validate required fields
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Name, phone, and service are required' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database using Prisma
    // 2. Send confirmation email/SMS
    // 3. Send notification to salon staff
    // 4. Integrate with Meta Ads for tracking

    // For now, we'll just log the booking and return success
    console.log('New booking request:', {
      name,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: 'Booking request received successfully! We will contact you soon.',
      bookingId: `BK${Date.now()}`,
      estimatedResponse: 'within 2 hours'
    })

  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'BAIQ SRI PRIHATIN Booking API',
    services: [
      'Potong & Styling Rambut',
      'Treatment Wajah',
      'Manicure & Pedicure',
      'Makeup & Hijab Styling'
    ],
    workingHours: {
      weekdays: '09:00 - 20:00',
      weekends: '10:00 - 18:00'
    }
  })
}