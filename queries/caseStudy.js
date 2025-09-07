import gql from 'graphql-tag';

export const CASE_STUDY = gql `
query CASE_STUDY($slug: String!) {
	pageData: caseStudyBy(uri: $slug) {
		databaseId
		acfFields
		featuredImage {
			node {
				sourceUrl
			}
		}
		seo {
			title
			socialImage {
				sourceUrl
			}
			description
		}
		title
	}
}
`