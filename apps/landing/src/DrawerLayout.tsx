

const DrawerLayout = ({ children, menu }: { children: any, menu: any }) => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                {menu}
            </div>
        </div>
    )
}

export default DrawerLayout;