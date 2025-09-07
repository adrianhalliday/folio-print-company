import gql from 'graphql-tag';
import { CORE_PAGE_FIELDS } from '~/queries/fragments/CorePageFields.js';

export const PAGE = gql `
${CORE_PAGE_FIELDS}
query PAGE($slug: String!) {
	pageData: pageBy(uri: $slug) {
		...CorePageFields
	}
}
`