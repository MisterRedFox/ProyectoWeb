document.getElementById('commentForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, comment })
    });

    if (response.ok) {
        document.getElementById('commentForm').reset();
        loadComments();
    }
});

async function loadComments() {
    const response = await fetch('/api/comments');
    const comments = await response.json();
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = comments.map(c => `<li><strong>${c.username}:</strong> ${c.comment}</li>`).join('');
}

loadComments(); // Cargar comentarios al iniciar la página
