const {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql
} = require('@apollo/client');

const fetch = require('node-fetch');
// const Apollo = require('apollo-client');
// const gql = require('graphql-tag');
//
// const { ApolloClient } = Apollo;
// const { HttpLink } = require('apollo-link-http');

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'http://localhost:3000/graphql', fetch })
});

module.exports = {
  getAllTours: () => {
    return new Promise((resolve, reject) => {
      client
        .query({
          query: gql`
            query {
              getAllTours {
                id
                startLocation {
                  type
                  coordinates
                  description
                  address
                }
                ratingsAverage
                ratingsQuantity
                images
                startDates
                secretTour
                guides {
                  photo
                  role
                  name
                  email
                }
                name
                duration
                maxGroupSize
                difficulty
                price
                summary
                description
                imageCover
                locations {
                  type
                  coordinates
                  description
                  address
                }
                slug
                durationWeeks
                reviews
              }
            }
          `
        })
        .then(response => {
          resolve(response);
        });
    });
  }
};
