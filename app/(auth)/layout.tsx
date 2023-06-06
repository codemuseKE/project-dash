import Glass from "@/components/Glass"
import clsx from "clsx"
import '../../styles/globals.css'

export default function Authroot({children}) {
    return (
        <html lang="en">
            <head/>
            <body className='w-screen h-screen p-6 rainbow-mesh'>
                <Glass className="flex items-center justify-center w-full h-full">
                {children}
                </Glass>
            </body>
        </html>
    )
}
