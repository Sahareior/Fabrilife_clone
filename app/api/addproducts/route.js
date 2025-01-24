import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, price, oldPrice, image } = body;

    console.log("Received body:", body);

    const email = "test@email.com";
    const newPrice = parseFloat(price); // Convert price to a float
    const newOldPrice = oldPrice ? parseFloat(oldPrice) : null; // Convert oldPrice to float or set to null if not provided

    // Validate required fields
    if (!name || !newPrice || !image) {
      return NextResponse.json(
        { error: "Name, price, and image are required fields." },
        { status: 400 }
      );
    }

    const added = await prisma.product.create({
      data: {
        name,
        email,
        price: newPrice,
        oldPrice: newOldPrice,
        image,
      },
    });

    console.log("Product added:", added);

    return NextResponse.json(added);
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
