import MegaMenu from '@/components/frontend/MegaMenu'
import Navbar from '@/components/frontend/Navbar'
import React, { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className="max-w-5xl mx-auto py-6">
                <MegaMenu />
            </div>
            {children}
        </div>
    )
}
