const filterObject = (listA, listB) =>
  listA.filter((obj) => {
    return !listB.some((obj2) => {
      return (
        Object.keys(obj).length === Object.keys(obj2).length &&
        Object.keys(obj).every((p) => obj[p] === obj2[p])
      );
    });
  });
export default filterObject;
