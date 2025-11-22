const askBtn = document.getElementById('askBtn');
const input = document.getElementById('input');
const output = document.getElementById('output');

askBtn.addEventListener('click', async () => {
  const prompt = input.value;
  output.textContent = 'Réponse en cours...';
  
  const API_KEY = 'TA_CLE_GROQ_ICI'; // Remplacer par votre clé

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-70b-versatile',
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await response.json();
    output.textContent = data.choices[0].message.content;
  } catch (err) {
    output.textContent = 'Erreur : ' + err.message;
  }
});

