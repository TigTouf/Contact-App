export default function (contactList = [], action) {
  if (action.type === 'addcontact') {
    var contactListCopy = [...contactList];
    var isUserExist = false;
    for (var i = 0; i < contactListCopy.length; i++) {
      if (contactListCopy[i].email === action.email) {
        isUserExist = true;
        return contactList;
      }
    }

    if (!isUserExist) {
      contactListCopy.push({
        name: action.name,
        firstName: action.firstName,
        email: action.email,
        company: action.company
      });
      return contactListCopy;
    }
  } else {
    return contactList;
  }
};
