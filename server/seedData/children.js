Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

const remDays = (days) => {
  var someDate = new Date()
  someDate.setDate(someDate.getDate() - days)
  return someDate
}

let today = new Date()

const children = [
  {
    name: 'Frodo',
    recentDeposits: [
      {
        action: '+ $5.00 Allowance',
        date: remDays(3),
      },
      {
        action: '+ $5.00 Allowance',
        date: remDays(10),
      },
      {
        action: '+ $35.00 Birthday gifts',
        date: remDays(17),
      },
    ],
    recentWithdrawals: [
      {
        action: '- $19.37 Steam Winter Sale',
        date: remDays(2),
      },
      {
        action: '- $2.12 Dollar store candy',
        date: remDays(12),
      },
      {
        action: '- $1.03 Ice Cream',
        date: remDays(36),
      },
    ],
    secret: '4uTe2H72YnezKhdcgNnTsEPet652BxQ5',
    avatar: 'frodo.png',
    funds: [
      {
        name: 'Spending',
        balance: 47.23,
        percentage: 0,
      },
      {
        name: 'Savings',
        balance: 47.23,
        percentage: 5,
      },
      {
        name: 'Charity',
        balance: 47.23,
        percentage: 10,
      },
    ],
  },
  {
    name: 'Arwen',
    recentDeposits: [
      {
        action: '+ $1.50 Allowance',
        date: remDays(2),
      },
      {
        action: '+ $1.50 Allowance',
        date: remDays(8),
      },
      {
        action: '+ $5.00 Serendipity',
        date: remDays(22),
      },
    ],
    recentWithdrawals: [
      {
        action: '- $6.37 Presents',
        date: remDays(1),
      },
      {
        action: '- $2.12 Happy meal',
        date: remDays(9),
      },
      {
        action: '- $10.00 Donation',
        date: remDays(42),
      },
    ],
    avatar: 'arwen.png',
    funds: [
      {
        name: 'Spending',
        balance: 22.24,
        percentage: 0,
      },
      {
        name: 'Savings',
        balance: 0,
        percentage: 5,
      },
      {
        name: 'Tithing',
        balance: 7.23,
        percentage: 10,
      },
    ],
  },
  {
    name: 'Samwise',
    recentDeposits: [
      {
        action: '+ $0.01 found a penny',
        date: remDays(0),
      },
      {
        action: '+ $0.25 found a quarter',
        date: remDays(10),
      },
      {
        action: '+ $0.15 found some nickels',
        date: remDays(17),
      },
    ],
    recentWithdrawals: [
      {
        action: '- $100.00 Eagle tickets',
        date: remDays(2),
      },
      {
        action: '- $5.12 Lembas bread',
        date: remDays(12),
      },
      {
        action: '- $1.00 Alms',
        date: remDays(36),
      },
    ],
    secret: '4uTe2H72YnezKhdcgNnTsEPet652BxQ5',
    avatar: 'frodo.png',
    funds: [
      {
        name: 'Spending',
        balance: -3.23,
        percentage: 0,
      },
      {
        name: 'Savings',
        balance: 0,
        percentage: 0,
      },
      {
        name: 'Alms',
        balance: 1.0,
        percentage: 10,
      },
    ],
  },
  {
    name: 'Frodo',
    recentDeposits: [
      {
        action: '+ $5.00 Allowance',
        date: remDays(3),
      },
      {
        action: '+ $5.00 Allowance',
        date: remDays(10),
      },
      {
        action: '+ $35.00 Birthday gifts',
        date: remDays(17),
      },
    ],
    recentWithdrawals: [
      {
        action: '- $19.37 Steam Winter Sale',
        date: remDays(2),
      },
      {
        action: '- $2.12 Dollar store candy',
        date: remDays(12),
      },
      {
        action: '- $1.03 Ice Cream',
        date: remDays(36),
      },
    ],
    secret: '4uTe2H72YnezKhdcgNnTsEPet652BxQ5',
    avatar: 'frodo.png',
    funds: [
      {
        name: 'Spending',
        balance: 47.23,
        percentage: 0,
      },
      {
        name: 'Savings',
        balance: 47.23,
        percentage: 5,
      },
      {
        name: 'Charity',
        balance: 47.23,
        percentage: 10,
      },
    ],
  },
  {
    name: 'Arwen',
    recentDeposits: [
      {
        action: '+ $1.50 Allowance',
        date: remDays(2),
      },
      {
        action: '+ $1.50 Allowance',
        date: remDays(8),
      },
      {
        action: '+ $5.00 Serendipity',
        date: remDays(22),
      },
    ],
    recentWithdrawals: [
      {
        action: '- $6.37 Presents',
        date: remDays(1),
      },
      {
        action: '- $2.12 Happy meal',
        date: remDays(9),
      },
      {
        action: '- $10.00 Donation',
        date: remDays(42),
      },
    ],
    avatar: 'arwen.png',
    funds: [
      {
        name: 'Spending',
        balance: 22.24,
        percentage: 0,
      },
      {
        name: 'Savings',
        balance: 0,
        percentage: 5,
      },
      {
        name: 'Tithing',
        balance: 7.23,
        percentage: 10,
      },
    ],
  },
]

export default children
