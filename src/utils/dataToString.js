module.exports = data => {
  return data.map(person => {
    return `{"id": "${person.id}", "name": "${person.name}"}`
  }).join('\n');
}