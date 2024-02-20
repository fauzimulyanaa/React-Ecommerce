import Commerce from '@chec/commerce.js';
const CHEC_PUBLIC_KEY = import.meta.env.VITE_CHEC_PUBLIC_KEY;
export const commerce = new Commerce(CHEC_PUBLIC_KEY, true);
