function downloadFile(url, fileName) {
  // Create an invisible anchor element
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;

  // Append the anchor to the document
  document.body.appendChild(a);

  // Trigger the download by simulating a click on the anchor
  a.click();

  // Remove the anchor from the document after the download starts
  document.body.removeChild(a);
}
