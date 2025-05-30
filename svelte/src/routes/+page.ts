export const prerender = true;

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  //     populate[chart][populate][0]=data_source
  const base_strapi = "https://worthy-sunrise-ddd60f1bea.strapiapp.com/";
	const res = await fetch(`${base_strapi}api/articles?populate=*`, {
    headers: {
      Authorization: `Bearer bd8963a0a9378127ebbaf0c2609568b44e8ece53586847df4476edb04d7d989b027c26d4174a2842dc9f834e02a6e23321e231e79eac0d2dfdb5f6a957bc6f9033b51dd6d9f986f1fefff40764e19ca6f511004cc479a38f88417a6d7f61b4e7a0d9fe1fe9a1845cac532a561e910c4677fac870e566463091e8fe73c53c1eb0`
    }});
	const res_json = await res.json();

	return { result: res_json };
};