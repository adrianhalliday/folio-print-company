import gql from 'graphql-tag';

export const MENUS = gql `
query MENUS {
	headerMenu: menu(id: "Header Menu", idType: NAME) {
		menuItems {
			edges {
				node {
					order
					path
					url
					target
					cssClasses
					label
				}
			}
		}
	},
	modalMenu: menu(id: "Modal Menu", idType: NAME) {
		menuItems {
			edges {
				node {
					order
					path
					url
					target
					cssClasses
					label
				}
			}
		}
	}
}
`