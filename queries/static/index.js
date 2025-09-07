const page = {
	builderRows: [
		{
			id: 'home-hero',
			bgImage: false,
			rowHeight: 'h-100',
			layoutClasses: '',
			rowBg: 'transparent',
			block: [{
				acf_fc_layout: "PageBuilderHero",
				image: {
					url: '',
				},
				hasVideo: true,
				mp4: "assets/videos/Factory.mp4",
				webm: "",
			}]
		},
		{
			id: 'home-feature',
			bgImage: false,
			rowHeight: 'h-full',
			layoutClasses: '',
			rowBg: 'lavender',
			block: [{
				acf_fc_layout: "PageBuilderContentVisualFeature",
				layout: 'two',
				lhs: {
					content: '<h2>Large-format printing experts</h2><p>Industrial-grade printing technology meets masterful craftsmanship. We specialize in large-scale printing solutions for construction, advertising, manufacturing, and architectural industries—delivering superior quality prints that withstand demanding environments and exceed professional standards.</p>',
					cta: {
						addCta: true,
						type: 'link',
						newWindow: false,
						text: 'Case studies',
						link: 'https://replaceme.com/case-studies/',
						file: '',
						url: '',
					},
				},
				flexibleMedia: {
					ratio: '1:1',
					flexibleMedia: {
						type: 'image',
						images: [
							{
								url: '/assets/images/printer3.jpg',
								alt: 'A large format printer',
							}
						],
						placeholderImage: {},
						mp4: '',
						webm: '',
						vimeoId: '',
					}
				}
			}]
		},
		{
			id: 'home-standard',
			bgImage: false,
			rowHeight: 'h-full',
			layoutClasses: '',
			rowBg: 'white',
			block: [{
				acf_fc_layout: "PageBuilderContentVisualStandard",
				layout: 'two',
				lhs: {
					content: '<h2>Quality meets capability</h2><p>Our industrial printing facility combines cutting-edge large-format equipment with archival-grade UV-resistant inks and professional-grade substrates to deliver uncompromising quality at scale. When your project demands both precision and durability, we deliver with technology and materials that set the industry standard.</p>',
					cta: {
						addCta: true,
						type: 'link',
						newWindow: false,
						text: 'Case studies',
						link: 'https://replaceme.com/case-studies/',
						file: '',
						url: '',
					},
				},
				flexibleMedia: {
					ratio: '1:1',
					flexibleMedia: {
						type: 'image',
						images: [
							{
								url: '/assets/images/printer.jpg',
								alt: 'A large format printer',
							}
						],
						placeholderImage: {},
						mp4: '',
						webm: '',
						vimeoId: '',
					}
				}
			}]
		},
	],
	pageData: {
		seo: {
			title: "Print Nation",
			socialImage: {
				sourceUrl: ""
			},
			description: "Professional large format print services.",
		}
	}
}

export default page
