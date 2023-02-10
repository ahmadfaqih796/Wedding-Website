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

let textDana = document.getElementById("copy-dana").innerHTML;
const copyRekeningDana = async () => {
  try {
    await navigator.clipboard.writeText(textDana);
    console.log("Berhasil mengcopy " + textDana);
    alert("Berhasil mengcopy " + textDana)
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

