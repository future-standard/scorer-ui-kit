const base = import.meta.env.BASE_URL;
export const BASE_PATH = base.endsWith('/') ? base : `${base}/`;
