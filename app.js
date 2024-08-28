// Función para eliminar mayúsculas y caracteres especiales
function sanitizeInput(text) {
    return text.toLowerCase().replace(/[^a-z0-9 ]/g, '');
}

// Función de cifrado
function encrypt(text) {
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}

// Función de descifrado
function decrypt(text) {
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
}

// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Texto copiado al portapapeles");
    });
}

// Mostrar resultado y ocultar otro
function displayResult(resultId, text) {
    const resultElement = document.getElementById(resultId);
    resultElement.textContent = text;
    resultElement.style.display = 'block';

    const otherResultId = resultId === 'encryptedResult' ? 'decryptedResult' : 'encryptedResult';
    document.getElementById(otherResultId).style.display = 'none';
}

// Evento al hacer clic en el botón de cifrar
document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const sanitizedText = sanitizeInput(inputText);
    const encryptedText = encrypt(sanitizedText);
    displayResult('encryptedResult', `Texto cifrado: ${encryptedText}`);
});

// Evento al hacer clic en el botón de descifrar
document.getElementById('decryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const sanitizedText = sanitizeInput(inputText);
    const decryptedText = decrypt(sanitizedText);
    displayResult('decryptedResult', `Texto descifrado: ${decryptedText}`);
});

// Evento al hacer clic en el botón de copiar
document.getElementById('copyBtn').addEventListener('click', () => {
    const encryptedVisible = document.getElementById('encryptedResult').style.display === 'block';
    const resultText = encryptedVisible 
        ? document.getElementById('encryptedResult').textContent.replace('Texto cifrado: ', '') 
        : document.getElementById('decryptedResult').textContent.replace('Texto descifrado: ', '');

    copyToClipboard(resultText);
});
