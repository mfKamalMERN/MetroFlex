import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://mfk:test123@portfolio.lsuj3bc.mongodb.net/MetroFlex?retryWrites=true&w=majority&appName=Portfolio`);
        console.log(`DB Connected`);

    } catch (error) {
        console.log(`DB not connected: `, error.message);
    }
}

export default ConnectDB;