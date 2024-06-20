import { cookies } from 'next/headers'
 
export async function POST(request: Request) {
  const cookieStore = cookies()
  cookieStore.set('token', '')
  return Response.json({success : true})

}