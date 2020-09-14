module.exports = (customerArr) => {
  return customerArr.map((customer) => {
    return { 
      user_id: customer.user_id,
      name: customer.name;
    }
  }
}
