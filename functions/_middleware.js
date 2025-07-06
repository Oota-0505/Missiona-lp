// export async function onRequest(context) {
//   const auth = context.request.headers.get("authorization");
//   const valid = "missiona:kadai"; // ユーザー名:パスワード
//   const encoded = btoa(valid);
  
//   if (!auth || auth !== `Basic ${encoded}`) {
//     return new Response("Unauthorized", {
//       status: 401,
//       headers: {
//         "WWW-Authenticate": 'Basic realm="Restricted"',
//       },
//     });
//   }

//   return await context.next();
// }