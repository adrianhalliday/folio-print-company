import { InMemoryCache } from 'apollo-cache-inmemory'

export default function (_context) {
	// If on the client, recover the injected state
    if (typeof window !== 'undefined') {
        const state = window.__APOLLO_STATE__
        
        if (state) cache.restore(state.defaultClient)
    }

	return {
		httpEndpoint: process.env.API_URL || 'https://staging.api.domain.com/graphql',
		cache: new InMemoryCache(),
		queryDeduplication: false,
		defaultOptions: {
			query: {
				errorPolicy: 'all',
			},
			mutate: {
				errorPolicy: 'all',
			},
		},
        ...(process.server ? {
        	// Set this on the server to optimize queries when SSR
        	ssrMode: true,
        } : {
        	// This will temporary disable query force-fetching
        	ssrForceFetchDelay: 100,
        }),
	}
}