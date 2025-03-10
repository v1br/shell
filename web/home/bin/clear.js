const Clear = () => {
    let child = history.lastElementChild;
    while (child) {
        history.removeChild(child);
        child = history.lastElementChild;
    }
}