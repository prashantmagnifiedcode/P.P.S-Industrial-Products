import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, requirement } = body;

    // Validate phone number (minimum 8 digits after stripping non-numeric chars)
    const numericPhone = (phone || '').replace(/\D/g, '');
    if (!numericPhone || numericPhone.length < 8) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid contact number (at least 10 digits).' },
        { status: 400 }
      );
    }

    const refId = `PPS-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toISOString();
    const leadRecord = {
      refId,
      phone: phone.trim(),
      requirement: (requirement || '').trim(),
      targetRecipient: '+919350509134',
      createdAt: timestamp,
      source: 'Quick Inquiry Popup Modal',
    };

    // Safely store lead in local data store so inquiries are recorded on server
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, 'leads.json');
      let leads = [];
      if (fs.existsSync(leadsFile)) {
        try {
          const raw = fs.readFileSync(leadsFile, 'utf8');
          leads = JSON.parse(raw);
          if (!Array.isArray(leads)) leads = [];
        } catch {
          leads = [];
        }
      }
      leads.push(leadRecord);
      fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), 'utf8');
    } catch (fsErr) {
      console.error('[PPS Quick Lead] Error saving lead to file:', fsErr);
    }

    // Direct logging to console for instant developer/admin visibility
    console.log('========================================================');
    console.log(`[PPS LEAD DISPATCH] New Inquiry Received: Ref ${refId}`);
    console.log(`Client Contact No: ${leadRecord.phone}`);
    console.log(`Requirement: ${leadRecord.requirement || 'Not specified (Requested direct callback)'}`);
    console.log(`Destination: ${leadRecord.targetRecipient} (P.P.S Industrial Sales Desk)`);
    console.log(`Time: ${leadRecord.createdAt}`);
    console.log('========================================================');

    return NextResponse.json({
      success: true,
      refId,
      message: 'Your requirement has been received. Our sales engineer will call you shortly.',
    });
  } catch (error) {
    console.error('[PPS Quick Lead API Error]:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
