import {gql} from "@apollo/client";

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
  `;

export const SAVE_BOOK = gql`
mutation SaveBook($description: String!, $title: String!, $bookId: String!, $image: String!, $link: String) {
    saveBook(description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
      username
    }
  }
  `;

export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
    }
  }
  `;


