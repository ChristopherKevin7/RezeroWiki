document.getElementById('chatbotContainer').addEventListener('click', function() {

    showSearchPrompt();
});

function showSearchPrompt() {

    const userQuery = prompt('Digite sua pesquisa:');
    
    if (userQuery !== null) {
        console.log('Pesquisa:', userQuery);
    }
}