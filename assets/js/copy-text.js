let textBCA = document.getElementById("copy-bca").innerHTML;
const copyRekeningBCA = async () => {
  try {
    await navigator.clipboard.writeText(textBCA);
    console.log("Berhasil mengcopy " + textBCA);
    alert("Berhasil mengcopy " + textBCA)
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

let textBRI = document.getElementById("copy-bri").innerHTML;
const copyRekeningBRI = async () => {
  try {
    await navigator.clipboard.writeText(textBRI);
    console.log("Berhasil mengcopy " + textBRI);
    alert("Berhasil mengcopy " + textBRI)
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

