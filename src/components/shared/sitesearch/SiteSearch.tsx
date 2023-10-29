'use client'
import { Input } from "@/components/ui/input"
import { useEffect, useRef } from "react"
const SiteSearch = () => {
    const searchRef = useRef(null)
    return (
        <div>
            <Input
                type="text"
                placeholder="Search"
                ref={searchRef}
                className="w-[500px] border-2 !rounded-3xl !border-gray-400 focus:outline-none focus:ring
                 focus:border-blue-500 focus-visible:ring-transparent"
            />
        </div>
    )
}

export default SiteSearch