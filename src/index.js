export default {
	async fetch(request, env, ctx) {
		switch(request.method){
			case 'GET':
				let imgcount = await env.DB.prepare(
					'SELECT COUNT(*) AS total FROM PandaImg'
				).first('total');

				let imgnum = Math.ceil(Math.random() * imgcount)

				let imgdata = await env.DB.prepare(
					`SELECT * FROM PandaImg WHERE Id = ${imgnum}`
				).first();

				const data = {
					link: imgdata.Link,
					author: imgdata.Author,
					source: imgdata.Source
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
