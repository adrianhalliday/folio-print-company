import gql from 'graphql-tag';

export const FOOTER = gql `
query FOOTER {
	themeSettings {
		globalCustomSettings {
			footercontactdetails
			footercontent
			footercopyright
			footermenu {
				menuitem {
					target
					title
					url
				}
			}
			footermessage
			footersociallinks {
				linktext
				url
			}
		}
	}
}
`