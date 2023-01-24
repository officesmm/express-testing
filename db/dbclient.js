const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb://root:root@ac-yijuer1-shard-00-00.debllze.mongodb.net:27017,ac-yijuer1-shard-00-01.debllze.mongodb.net:27017,ac-yijuer1-shard-00-02.debllze.mongodb.net:27017/?ssl=true&replicaSet=atlas-b4966w-shard-0&authSource=admin&retryWrites=true&w=majority";
const databaseName = 'smm';

var client = MongoClient.connect(uri, { useNewUrlParser: true },async function(err, client) {
    const db = client.db(databaseName);
    db.collection('data').findOne({ id: "1" }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(user)
    })

    client.close();
});
module.exports = client;
