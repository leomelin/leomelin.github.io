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
		client: {"start":"_app/immutable/entry/start.CTOYmvpw.js","app":"_app/immutable/entry/app.CJCpYLo5.js","imports":["_app/immutable/entry/start.CTOYmvpw.js","_app/immutable/chunks/entry.D04NKta6.js","_app/immutable/chunks/scheduler.BeaK0CkN.js","_app/immutable/entry/app.CJCpYLo5.js","_app/immutable/chunks/scheduler.BeaK0CkN.js","_app/immutable/chunks/index.BZ331l8F.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
