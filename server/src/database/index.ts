import { Database } from './../lib/types'
import { MongoClient } from 'mongodb'

const uri = <string>process.env.DB_URL

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = client.db('main')

  return {
    listings: db.collection('test_listings'),
  }
}
