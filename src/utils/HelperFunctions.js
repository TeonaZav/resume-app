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
