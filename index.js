function sayHello() {
    const textElement = document.getElementById('my-text');
    const titleElement = document.getElementById('title');
    titleElement.textContent = textElement.value;
    textElement.value = '';
}