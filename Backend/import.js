const { MongoClient } = require("mongodb");
const fs = require("fs");

const uri = "mongodb+srv://jgondaliya28:oFWbStJXiVVCKevP@cluster0.hypye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function importJSON() {
    try {
        await client.connect();
        const db = client.db("test");
        const collection = db.collection("clientmessages");

        const data = JSON.parse(fs.readFileSync("../frontend/json/ClientMessage.json", "utf-8"));
        const result = await collection.insertMany(data);

        console.log(`${result.insertedCount} documents inserted!`);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

importJSON();
