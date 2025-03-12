import "./BottomDashboard.css";



const BottomDashboard = ({children}) => {
    return (
        <div className="container">
            <main className="content">
        {children}
            </main>
        </div>
    )
}

export default BottomDashboard