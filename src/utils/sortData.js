module.exports = (customerArr) => {
  return customerArr.sort((a, b) => {
    const idA = a.user_id
    const idB = b.user_id
    return idA < idB ? -1 : idA > idB ? 1 : 0;
  });
}
