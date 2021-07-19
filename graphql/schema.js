module.exports = {
  typeDefs: `
   type Query {
       hello: String!
       getAllTours: [Tour]
       getTourBySlug(slug: String): Tour
   }
   type Location {
       type: String
       coordinates: [Float]
       description: String
       address: String
   }
   type Guide {
       photo: String
       role: String
       _id: ID
       name: String
       email: String
   }
   type Tour {
       startLocation: Location
       ratingsAverage: Float
       ratingsQuantity: Int
       images: [String]
       startDates: [String]
       secretTour: Boolean
       guides: [Guide]
       _id: ID
       name: String
       duration: Int
       maxGroupSize: Int
       difficulty: String
       price: Int
       summary: String
       description: String
       imageCover: String
       locations: [Location]
       slug: String
       durationWeeks: Float
       reviews: [String]
       id: ID
   }
`
};