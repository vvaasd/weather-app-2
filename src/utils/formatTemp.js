export default function formatTemp(temp = '') {
  let formatedTemp = temp;

  if (typeof formatedTemp === 'number') {
    formatedTemp = Math.round(formatedTemp).toString();
  }

  if (!formatedTemp.startsWith('-') && formatedTemp !== '') {
    formatedTemp = '+' + formatedTemp;
  }
  return formatedTemp;
}
