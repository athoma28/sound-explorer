document.getElementById('phoneticForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const character = document.getElementById('character').value;
    const ipa = document.getElementById('ipa').value;

    fetch('https://gaf8s4n2qk.execute-api.eu-west-3.amazonaws.com/dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ character, ipa }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = 'Success: ' + JSON.stringify(data);
    })
    .catch(error => {
        document.getElementById('response').innerText = 'Error: ' + error;
    });
});
