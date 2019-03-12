require('dotenv').config()

export const config = {
  secrets: {
    jwt: 'learneverything'
  },
  dbUrl: `mongodb+srv://${process.env.USERNAME}:${
    process.env.PASSWORD
  }@cluster0-rrbed.mongodb.net/use-tech-stuff?retryWrites=true`
}
