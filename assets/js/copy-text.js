let text = document.getElementById("copy").innerHTML;
const copyRekening = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Berhasil mengcopy " + text);
    alert("Berhasil mengcopy " + text)
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
