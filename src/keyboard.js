// event.code is the way to get the key code
// arrow keys: ArrowRight ArrowDown ArrowLeft ArrowUp
// letter keys: KeyW

function initKeyPressListener(handleKeyPress) {
  console.log("initKeyPressListener");
  document.addEventListener("keydown", handleKeyPress);
}
export default initKeyPressListener;
