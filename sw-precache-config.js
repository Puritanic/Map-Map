module.exports = {
	swFilePath: 'build/service-worker.js',
	stripPrefix: 'build/',
	staticFileGlobs: ['build/*.html', 'build/manifest.json', 'build/static/**/!(*map*)'],
	dontCacheBustUrlsMatching: /\.\w{8}\./,
	navigateFallback: 'index.html',
	runtimeCaching: [
		{
			urlPattern: /https?:\/\/fonts.+/,
			handler: 'fastest',
		},
		{
			urlPattern: /https?:\/\/images.+/,
			handler: 'fastest',
		},
	],
	verbose: true,
	handleFetch: true,
};
