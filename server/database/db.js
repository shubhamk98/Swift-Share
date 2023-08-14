import mongoose from "mongoose";

// f1fJs2torsLtqrjM

const DBConnection = async () => {
    const MDB_URL = `mongodb://shubhamkamboj565:f1fJs2torsLtqrjM@ac-7e8lzvz-shard-00-00.qs1cfam.mongodb.net:27017,ac-7e8lzvz-shard-00-01.qs1cfam.mongodb.net:27017,ac-7e8lzvz-shard-00-02.qs1cfam.mongodb.net:27017/?ssl=true&replicaSet=atlas-114dmt-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(MDB_URL, { useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error while connecting to DB', error.message);
    }
}

export default DBConnection;
