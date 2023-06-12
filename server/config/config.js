const config = {
	test: {
		STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY_TEST,
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY_TEST,
	},
	live: {
		STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY_LIVE,
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY_LIVE,
	},
};

module.exports = config;
