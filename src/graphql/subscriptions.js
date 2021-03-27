/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateSummary = /* GraphQL */ `
  subscription OnCreateSummary {
    onCreateSummary {
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
export const onUpdateSummary = /* GraphQL */ `
  subscription OnUpdateSummary {
    onUpdateSummary {
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
export const onDeleteSummary = /* GraphQL */ `
  subscription OnDeleteSummary {
    onDeleteSummary {
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
export const onCreateSubscriber = /* GraphQL */ `
  subscription OnCreateSubscriber {
    onCreateSubscriber {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSubscriber = /* GraphQL */ `
  subscription OnUpdateSubscriber {
    onUpdateSubscriber {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSubscriber = /* GraphQL */ `
  subscription OnDeleteSubscriber {
    onDeleteSubscriber {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
