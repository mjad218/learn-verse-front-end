import { Suspense } from "react"

export default function CategoriesMainBox() {
  return (
    <div className='px-4 pb-4'>
      <p className="font-roboto font-extrabold text-2xl py-4">
        Explore a wide variety of Categories
      </p>
      <div className="flex justify-between flex-row">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  )
}

//TODO: Boxed Skeleton
function Box() {
  return (
    <Suspense fallback={<FallBackBox />}>
      <div className="border-black border w-60 h-40 rounded-xl flex justify-center items-center">
        <p className="text-lg font-bold">Content</p>
      </div>
    </Suspense>
  )
}

function FallBackBox() {
  return (
    <div className="w-60 h-40 flex justify-center items-center">
      <div className="skeleton w-52 h-40 border-black border "></div>
    </div>
  )
}