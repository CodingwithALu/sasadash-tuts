import type React from "react";

export const Page = ({ children }: React.PropsWithChildren) => {
    return <div className="px-4 py-8 md:p-8">
        {children}
    </div>
}
export const PageHeader = () => {
    return <div>Page Header</div>
}