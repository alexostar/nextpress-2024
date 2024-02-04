export const GET_ALL_ISSUES = `
query AllIssues {
    issues {
      edges {
        node {
          id
          title
          slug
          issueFields {
            description
            isCompleted
            issueStatus
          }
        }
      }
    }
  }
  `;

export const GET_ISSUE_BY_ID = `
  query IssueById($id: ID!) {
    issue(id: $id) {
      id
      title
      slug
      issueFields {
        description
        isCompleted
        issueStatus
      }
      date
      author {
        node {
          username
        }
      }
    }
  }
`;

export const CREATE_ISSUE = `
  mutation CreateIssue(
    $title: String!
  ) {
    createIssue( 
      input: {
        title: $title
        description: "Bla bla bla" 
        isCompleted: false
        issueStatus: "OPEN"
      status: PUBLISH
       }) {
      issue {
        id
        slug
        status
        title
        issueFields {
          description
          isCompleted
          issueStatus
        }
      }
    }
  }  
  `;

export const UPDATE_ISSUE = `
  mutation UpdateIssue(
    $id: ID!
    $isCompleted: Boolean!
  ) {
    updateIssue(
      input: {
        id: $id
        isCompleted: $isCompleted
      }
    ) {
      clientMutationId
      issue {
        databaseId
        id
        title
      }
    }
  }
`;

export const DELETE_ISSUE = `
  mutation DeleteIssue($id: ID!) {
    deleteIssue(input: { id: $id }) {
      clientMutationId
      deletedId
    }
  }
`;
