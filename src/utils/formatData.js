module.exports = (customerArr) => {
  return customerArr.map((customer) => {
    return { 
      id: customer.user_id,
      name: customer.name
    }
  });
}
