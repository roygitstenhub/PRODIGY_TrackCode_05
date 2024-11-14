import jwt from "jsonwebtoken"

const genrateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET)
    res.cookie('jwt', token)
    console.log(token)
}

export default genrateToken