import gql from 'graphql-tag';

// query CLIENT_LOGOS {
export const CLIENT_LOGOS = gql `
query CLIENT_LOGOS($resultsToReturn: Int!, $orderBy: PostObjectsConnectionOrderbyEnum!) {
	clients(first: $resultsToReturn, where: {
		orderby: {
			field: $orderBy,
			order: ASC
		}
	}) {
		edges {
			node {
				featuredImage {
					node {
						mediaItemUrl
					}
				}
				title
			}
		}
	}
}
`