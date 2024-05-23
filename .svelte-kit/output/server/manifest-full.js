export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","background2.webp","email.webp","favicon.png","favicon.webp","funnel.svg","github.webp","linkedin.webp","phone.webp","portrait.webp"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.D4jMp187.js","app":"_app/immutable/entry/app.DlyxPhGL.js","imports":["_app/immutable/entry/start.D4jMp187.js","_app/immutable/chunks/entry.CZKUIg3s.js","_app/immutable/chunks/scheduler.BeaK0CkN.js","_app/immutable/entry/app.DlyxPhGL.js","_app/immutable/chunks/scheduler.BeaK0CkN.js","_app/immutable/chunks/index.BZ331l8F.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
