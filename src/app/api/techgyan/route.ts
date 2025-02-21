import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connect } from '@/dbConfig/dbConfig';

connect(); // Make sure MongoDB is connected

// GET request handler
export async function GET(req: NextRequest) {
  try {
    // Check if MongoDB is connected
    const db = mongoose.connection.db;

    if (!db) {
      return NextResponse.json({ success: false, error: 'Database connection not established' }, { status: 500 });
    }

    // Query the 'techGyan' collection
    const collection = db.collection('techGyan');
    const data = await collection.find({}).toArray(); // Fetch all documents

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching data' }, { status: 500 });
  }
}
