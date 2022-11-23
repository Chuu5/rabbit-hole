type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div style={{maxWidth: "1140px", marginInline: "auto"}}>
            {children}
        </div>
    )
}

export default Layout