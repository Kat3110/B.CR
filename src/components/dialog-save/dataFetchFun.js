export function stageListFetch(data, selectData) {
  return data.map((item) => ({
    ...item,
    checked: selectData.includes(item.id),
  }));
}
