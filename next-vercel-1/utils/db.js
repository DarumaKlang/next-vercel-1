import mongoose from "mongoose";

const connect = async () => {
    if (mongoose.connection[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        throw new Error("Error connecting to MongoDB");
    }
};

export default connect;