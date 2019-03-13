require('dotenv').config()

export const config = {
  secrets: {
    jwt: `${process.env.SECRET}`
  },
  dbUrl: `${process.env.DB_CONFIG}`
}
