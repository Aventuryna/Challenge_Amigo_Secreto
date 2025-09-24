let friends = [];
let SecretFriend ='';

// Función para agregar un amigo a la lista
function addFriend() {
    console.log('Adding a friend...');
    const input = document.getElementById('friends');
    const friendName = input.value.trim();

    console.log('Friend name:', friendName);
    if (friendName && !friends.includes(friendName)) {
        friends.push(friendName);
        input.value = '';
        console.log('Current friends list:', friends);
        displayFriends();
    } else if (!friendName) {
        alert('Por favor, inserte un nombre.');
    } else {
        alert('Este nombre ya existe. Por favor, inserte un nombre diferente.');
    }
  }

  // Función para mostrar la lista de amigos en el DOM
function displayFriends() {
    console.log('Displaying friends list...');
    
    const friendsList = document.getElementById('friendsList');
    
    friendsList.innerHTML = '';
    
    for (let i = 0; i < friends.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = friends[i];
        friendsList.appendChild(listItem);
    }
    
    console.log('Friends list updated in DOM');
}

// Función para sortear el amigo Secreto
