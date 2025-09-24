let friends = [];
let SecretFriend ='';

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

function displayFriends() {
    console.log('Displaying friends list...');