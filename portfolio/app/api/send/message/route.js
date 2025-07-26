import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
      const { name, email, message } = req.json();
      console.log(name, email, message)
      if (!name || !email || !message) {
        return NextResponse.json({message: "Bad Request"}, { status: 400 }); // Return bad request
      }
  
  
      return NextResponse.json({ message: "Message received successfully!" }, { status: 200 });  // Send success message
    } catch (error) {
      // Log the error
      console.error("Error processing message:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  };
  