import clientPromise from "@/lib/mongodb";

export async function POST(request){
  const client = await clientPromise;
  const body = await request.json();

  const db = client.db("linktree");
  const collection = db.collection("links");

  const doc = await collection.findOne({ handle: body.handle });

  if (doc) {
    return Response.json({
      message: "handle already exists  ",
      success: false,
      error: true,
      result: null,
    });
  }
  const result = await collection.insertOne(body);
  return Response.json({
    message: "added Successfully ",
    success: true,
    error: false,
    result: result,
  });
}
// -------------------------------------------------------
// ----------------------------------------------
// -------------------------------
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("linktree");
    const collection = db.collection("links");

    // Fetch ALL documents
    const items = await collection.find({}).toArray();

    return Response.json({
      message: "Fetched successfully",
      success: true,
      error: false,
      result: items,
    });
  } catch (error) {
    return Response.json(
      {
        message: "Failed to fetch data",
        success: false,
        error: true,
        result: null,
      },
      { status: 500 }
    );
  }
}