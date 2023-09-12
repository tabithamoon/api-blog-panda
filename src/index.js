/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		switch(request.method){
			case 'GET':
				let imgnum = Math.ceil(Math.random() * 2).toString().padStart(4, '0')
				let credit = await env.LINK_STORAGE.get(`panda-${imgnum}`)

				const data = {
					link: `https://files.tabby.page/pandas/panda-${imgnum}.jpg`,
					author: credit
				};

				return new Response(JSON.stringify(data, null, 2), {
					headers: {
					  "content-type": "application/json;charset=UTF-8",
					},
				  });

			default:
				return new Response('Method Not Allowed', {
					status: 405,
					headers: {
					  Allow: 'GET',
					},
				  });
		}
	},
};
