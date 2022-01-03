export const hello = () => {
    const target = document.createElement("div");
    target.innerHTML = "Hello World!";
    return target;
}