const truncate = (str, length) => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};

export default truncate;
