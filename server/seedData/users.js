import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Dad Doe',
    email: 'dad@example.com',
    password: bcrypt.hashSync('54321'),
    isAdmin: true,
  },
  {
    name: 'Mommy McDonald',
    email: 'mom@mcd.com',
    password: bcrypt.hashSync('54321'),
  },
]

export default users
