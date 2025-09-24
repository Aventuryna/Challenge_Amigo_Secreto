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
    
    const friendsList = document.getElementById('displayFriends');
    
    friendsList.innerHTML = '';
    
    for (let i = 0; i < friends.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = friends[i];
        friendsList.appendChild(listItem);
    }
    
    console.log('Friends list updated in DOM');
}

// Función para sortear el amigo Secreto
function drawSecretFriend() {
    console.log('Drawing secret friend...');
    if (friends.length === 0) {
        alert('No hay amigos para sortear. Por favor, agregue al menos un amigo.');
        return;
    }
    const randomIndex = Math.floor(Math.random() * friends.length);
    console.log('Random index:', randomIndex);

    SecretFriend = friends[randomIndex];
    console.log('Secret friend:', SecretFriend);

    const resultElement = document.getElementById('resultado');
    resultElement.innerHTML = '<li>🎉 El amigo sorteado es: ' + SecretFriend + '</li>';
    console.log('Result displayed in DOM');
    }

// Función para limpiar la lista de amigos y el resultado
function clearResult() {
    console.log('Clearing previous result...');
    const resultElement = document.getElementById('resultado');
    resultElement.innerHTML = '';
    SecretFriend = '';
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up event listeners...');
    
    const friendsInput = document.getElementById('friends');
    friendsInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            console.log('Enter key pressed, adding friend...');
            addFriend();
        }
    });
    
    console.log('Event listeners configured');
});