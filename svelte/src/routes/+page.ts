export const prerender = true;

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const base_strapi = "https://timely-unity-15efc06ae3.strapiapp.com/";
	const res = await fetch(`${base_strapi}api/cards?populate[card_content][on][card-content.card-infographic][populate][infographic][populate][0]=content&populate[card_content][on][card-content.card-chart][populate][chart][populate][0]=datasource`, {
    headers: {
      Authorization: `Bearer 43b622fc00d8ad3f6d2a2c3f1c5920e4b2ea92351079298d8bede0b094b65b1f99d758aeeb7f51267594b1b9af47d5beef70e566ce2db18c9e19f9a5ab189a695ebed9589a0541717cdd4768ba92525072bfddaeeb6ee01ab8f384552b5d9bb67309b4ce4f8101122854b6ce9c5a0119938050a85719d75a9cde05d394302d8c`
    }});
	const res_json = await res.json();

	return res_json;
};