import gql from 'graphql-tag'

export const CORE_PAGE_FIELDS = gql`
	fragment CorePageFields on Page {
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
`