export const formatPhoneNumber = (element) => {
  let valPhone = element.value;
  let split = 0;
  let chunk = [];

  valPhone = valPhone.replace(/[^\d|\|\+]/g, "");

  for (var i = 0; i < valPhone.length; i += split) {
    if (i === 0 || i === 3) {
      split = 4;
    } else if (i === 4) {
      split = 3;
    } else {
      split = 2;
    }

    chunk.push(valPhone.substr(i, split));
  }

  element.value = chunk.join(" ").toUpperCase();
};
// Convert file to base64
export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
// Convert base64 to file object
export const base64toFile = (dataurl, filename) => {
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

//Usage example:
// var file = dataURLtoFile('data:image/png;base64,......', 'a.png');
// console.log(file);

export const convertDataToString = (date, countryISO) => {
  return date.toLocaleDateString(countryISO);
};
