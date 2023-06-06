import Glass from "@/components/Glass";
// import clsx from "clsx";
// import "@/styles/global.css";
import '../../styles/globals.css'

export default function DashboardRoot({children}) {
    return (
        <html lang="en">
            <head/>
            <body className='p-6 h-screenw-screen rainbow-mesh'>
                <Glass className="flex items-center justify-center w-full height-full">
                {children}
                </Glass>
            </body>
        </html>
    )
}
