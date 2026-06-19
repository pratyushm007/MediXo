import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-CW7QI888.js
function createSupabaseClient() {
	return createClient("https://bigvaexahqofvawrtlrn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpZ3ZhZXhhaHFvZnZhd3J0bHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NDI4NzgsImV4cCI6MjA5NzQxODg3OH0.gs8VZ_e1Fpuw7fZGhdSgi-bSApJVZEPAJRVkiuj1UZ0", { auth: {
		storage: typeof window !== "undefined" ? localStorage : void 0,
		persistSession: true,
		autoRefreshToken: true
	} });
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
