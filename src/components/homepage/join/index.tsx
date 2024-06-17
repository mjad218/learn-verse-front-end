import { Row } from "@/components/shared/row"
import Link from "next/link"

export const JoinUs = () => {
  return (
    <Row >
     <div className="relative bg-accent4 py-16 px-20 rounded-t-3xl flex flex-col justify-center ">
           
     <h2 className="font-dmSerif text-4xl text-white mb-4">
            Join LearnVerse! 
        </h2>

<p className="text-white">
Level up your knowledge!

</p>
<Link href={'/auth/register'} className="mt-10 text-slate-800 font-dmSerif bg-accent9 py-1 px-6 rounded-3xl w-fit"> 
Sign Up
</Link>
     </div>
    </Row>
  )
}
