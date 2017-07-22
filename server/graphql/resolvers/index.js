import TweetResolvers from './tweet-resolver';
import UserResolvers from './user-resolver';
import GraphQLDate from 'graphql-date';

export default {
  Date: GraphQLDate,
  Query: {
    getTweets: TweetResolvers.getTweets,
    getTweet: TweetResolvers.getTweetById
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserResolvers.signup,
    login: UserResolvers.login

  }
}
