// CRUD create read update delete

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://root:root@ac-yijuer1-shard-00-00.debllze.mongodb.net:27017,ac-yijuer1-shard-00-01.debllze.mongodb.net:27017,ac-yijuer1-shard-00-02.debllze.mongodb.net:27017/?ssl=true&replicaSet=atlas-b4966w-shard-0&authSource=admin&retryWrites=true&w=majority';
const databaseName = 'smm'

const client = new MongoClient(connectionURL,{ useNewUrlParser: true });
client.connect();

async function connectionTest() {
  try {
    await client.db("smm").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}

async function getItemWithObjectID(tableName, id) {
    return new Promise(async (resolve, reject) => {
      try {
        var o_id = new ObjectId(id);
        await client.db("smm").collection(tableName).findOne({_id: o_id}, async (error, data) => {
            if (error) {
                console.log(error);
                return console.log('Unable to fetch');
            }
            resolve(data);
        });
      } catch(e){
        console.log("Item Find Error : "+e);
        // reject(e);
      }
    });
}


async function getUserData(userID) {
    return new Promise(async (resolve, reject) => {
      try {
        await client.db("smm").collection('data').findOne({ id: userID }, async (error, user) => {
            if (error) {
                console.log(error);
                return console.log('Unable to fetch');
            }
            resolve(user);
        });
      } catch(e){
        console.log("getUserData: "+e);
      }
    });
}

async function updateUserDecision(userID, userDecision) {
    return new Promise(async (resolve, reject) => {
      try {
        await client.db("smm").collection('data').updateOne({ id: userID }, {$set:{decision: userDecision}}, async (error, user) => {
            if (error) {
                console.log(error);
                return console.log('Unable to fetch');
            }
            resolve(user);
        });
      } catch(e){
        console.log("getUserData: "+e);
      }
    });
}

// items

async function insertNewItem(item) {
    return new Promise(async (resolve, reject) => {
      try {
        await client.db("smm").collection('item').insertOne(item, async (error, user) => {
            if (error) {
                console.log(error);
                return console.log('Unable to fetch');
            }
            resolve(user);
        });
      } catch(e){
        console.log("getUserData: "+e);
      }
    });
}

async function getAllItem() {
    return new Promise(async (resolve, reject) => {
      try {
        var arr = [];
        await client.db("smm").collection('item').find({}).toArray (async (error, data) => {
            if (error) {
                console.log(error);
                return console.log('Unable to fetch');
            }
            resolve(data);
        });
      } catch(e){
        console.log("Result Data Error : "+e);
      }
    });
}

module.exports = {
  getItemWithObjectID,
  getUserData,
  updateUserDecision,
  insertNewItem,
  getAllItem
};