import mongoose from "mongoose";

const connectDB = async() => {
    try {

        // connections validation
        if (mongoose.connections[0].readyState) return;
        // connect to database
        await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://francisgildev:Nzgp8ajKvXIQqY8d@cluster0.xjlimqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Database Successfully Connected!");
    } catch (error) {
        // log the error
        console.log("Error: ", error);
    }
}

export default connectDB