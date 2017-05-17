const menuChange = (id) => {
  console.log("ID: " + id);
  return {
    type: 'CHANGE_MENU',
    id
  }
}

export default menuChange
