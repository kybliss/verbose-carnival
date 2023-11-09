import {gql} from "@apollo/client";

export const QUERY_ME = gql`
query Me {
    me {
      _id
      email
      password
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
  `;