import mongoose from "mongoose";



const DBConnection = async () => {
    const MDB_URL = `MDB_URL`;

    try {
        await mongoose.connect(MDB_URL, { useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error while connecting to DB', error.message);
    }
}

export default DBConnection;
