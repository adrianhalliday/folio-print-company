const pages = {
	contact: {
		builderRows: [
			{
				id: 'contact-details',
				bgImage: false,
				rowHeight: 'h-full',
				layoutClasses: '',
				rowBg: 'lavendar',
				block: [{
					acf_fc_layout: 'PageBuilderContactPage',
					content: "<p>Get in touch with us today. We'd love to hear from you and discuss how we can help with your project.</p>",
					contactDetails: [
					  {
						heading: "General Inquiries",
						details: "<p>Email: hello@printnation.com<br>Phone: +1 (234) 567-890</p>"
					  },
					  {
						heading: "Office Location",
						details: "<p>123 Business Street<br>Suite 100<br>City, State 12345</p>"
					  },
					  {
						heading: "Business Hours",
						details: "<p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM<br>Sunday: Closed</p>"
					  },
					]
				  }]
			},
		],
		pageData: {
			seo: {
				title: "Contact Us | Print Nation",
				socialImage: {
					sourceUrl: ""
				},
				description: "Professional large format print services.",
			}
		}
	},
	'case-studies': {
		builderRows: [
			{
				id: 'case-studies',
				bgImage: false,
				rowHeight: 'h-full',
				layoutClasses: '',
				rowBg: 'lavender',
				block: [{
					acf_fc_layout: 'PageBuilderCaseStudyIndex',
					number: 5,
					notIn: null,
				}]
			},
		],
		pageData: {
			seo: {
				title: "Case Studies | Print Nation",
				socialImage: {
					sourceUrl: ""
				},
				description: "Professional large format print services.",
			}
		}
	},
}

export default pages
