export default function loadBalancer(chinaDownload, USDownload) {
  const arr = [];
  chinaDownload.then((res) => {
    arr.push(res);
  });
  USDownload.then((res) => {
    arr.push(res);
  });

  while (!arr.length) {
    // eslint-disable-next-line no-continue
    continue;
  }
  return arr[0];
}
