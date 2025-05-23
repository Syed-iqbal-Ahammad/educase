import { Home, Register, Login, NotFound, AccountSetting } from "../Pages/Layout"
import { Route, Routes } from "react-router"
const RouteLayout = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/setting" element={<AccountSetting />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouteLayout
