export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) return list.reduce((s, e) => s + e.id);
  return [];
}
