import gql from 'graphql-tag';
import { CORE_PAGE_FIELDS } from '~/queries/fragments/CorePageFields.js';

export const HOMEPAGE = gql `
${CORE_PAGE_FIELDS}
query HOMEPAGE {
	nodeByUri(uri: "/") {
		__typename
		...on Page {
			...CorePageFields
		}
	}
}
`