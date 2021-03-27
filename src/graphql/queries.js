/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      url
      title
      description
      tags {
        items {
          id
          name
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      summaries {
        items {
          id
          title
          url
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        title
        description
        tags {
          nextToken
        }
        summaries {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      blogID
      blog {
        id
        url
        title
        description
        tags {
          nextToken
        }
        summaries {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        blogID
        blog {
          id
          url
          title
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSummary = /* GraphQL */ `
  query GetSummary($id: ID!) {
    getSummary(id: $id) {
      id
      title
      url
      blogID
      blog {
        id
        url
        title
        description
        tags {
          nextToken
        }
        summaries {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSummarys = /* GraphQL */ `
  query ListSummarys(
    $filter: ModelSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSummarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        url
        blogID
        blog {
          id
          url
          title
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubscriber = /* GraphQL */ `
  query GetSubscriber($id: ID!) {
    getSubscriber(id: $id) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const listSubscribers = /* GraphQL */ `
  query ListSubscribers(
    $filter: ModelSubscriberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscribers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
