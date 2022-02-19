document.oncopy = e => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", "I think this text wasn't what you've copied...");
}