import gql from 'graphql-tag';

export const CASE_STUDIES = gql `
query CASE_STUDIES($resultsToReturn: Int = 20, $notIn: [ID] = null) {
	caseStudies(
		where: {
			orderby: {
				field: MENU_ORDER,
				order: ASC
			},
			status: PUBLISH,
			notIn: $notIn
		}
		first: $resultsToReturn
	) {
		edges {
			node {
				acfFields
				slug
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