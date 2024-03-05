export async function POST(request: Request) {
  const formData = await request.formData();
  const token = formData.get("token");

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token}` },
  });
}
