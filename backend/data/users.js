import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        idAdmin: true
    },
    {
        name: 'Kabir Khan',
        email: 'kabir@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Rahim Sheikh',
        email: 'rahim@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users