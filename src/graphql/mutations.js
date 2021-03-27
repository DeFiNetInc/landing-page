/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createSummary = /* GraphQL */ `
  mutation CreateSummary(
    $input: CreateSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    createSummary(input: $input, condition: $condition) {
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
export const updateSummary = /* GraphQL */ `
  mutation UpdateSummary(
    $input: UpdateSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    updateSummary(input: $input, condition: $condition) {
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
export const deleteSummary = /* GraphQL */ `
  mutation DeleteSummary(
    $input: DeleteSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    deleteSummary(input: $input, condition: $condition) {
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
export const createSubscriber = /* GraphQL */ `
  mutation CreateSubscriber(
    $input: CreateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    createSubscriber(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateSubscriber = /* GraphQL */ `
  mutation UpdateSubscriber(
    $input: UpdateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    updateSubscriber(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubscriber = /* GraphQL */ `
  mutation DeleteSubscriber(
    $input: DeleteSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    deleteSubscriber(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
