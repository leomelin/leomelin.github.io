

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.qn0KI7pm.js","_app/immutable/chunks/scheduler.BeaK0CkN.js","_app/immutable/chunks/index.BZ331l8F.js","_app/immutable/chunks/entry.B5ogPSrL.js"];
export const stylesheets = [];
export const fonts = [];
