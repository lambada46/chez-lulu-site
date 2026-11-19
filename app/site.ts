export const siteUrl = new URL('https://chez-lulu.fr');

export const phone = process.env.NEXT_PUBLIC_RESTAURANT_PHONE || '';
const dialNumber = phone.replace(/[^+\d]/g, '');
export const phoneHref = /\d/.test(dialNumber) ? `tel:${dialNumber}` : undefined;
