export default function createIteratorObject(report) {
  const arr = [];
  for (const employee of report.allEmployees) {
    arr.push(...Object.values(employee).flat());
  }
  return arr;
}
