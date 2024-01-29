document.getElementById('phoneticForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const character = document.getElementById('character').value;
  const ipa = document.getElementById('ipa').value;

  const data = { character, ipa };

  fetch('YOUR_API_GATEWAY_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch((error) => console.error('Error:', error));
});
