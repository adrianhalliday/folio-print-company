import gql from 'graphql-tag';

export const IMAGE_ALIGNMENTS = gql `
query IMAGE_ALIGNMENTS($ids: [ID]) {
	mediaItems(where: {in: $ids}) {
		nodes {
			imageAlignment {
				imagealignment
			}
			mediaItemId
		}
	}
}
`