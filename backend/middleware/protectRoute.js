import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                error: "Unauthorized - No Token Provided."
            })
        }

        //先解看看裡面的secret跟我們這裡有沒有吻合
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({
                error: "Unauthorized - Invalid Token"
            })
        }

        //在解看看裡面的userId在我們資料庫裡找不找得到
        const user = await User.findById(decoded.userId).select('-password') //不回傳password

        if (!user) {
            return res.status(404).json({ error: "查無此使用者" })
        }
        req.user = user;

        next();

    } catch (error) {
        console.log('Error in protectRoute middleware: ', error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}


export default protectRoute;