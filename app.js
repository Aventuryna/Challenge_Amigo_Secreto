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
    } else {
        console.log('Invalid or duplicate friend name.');
    }
}