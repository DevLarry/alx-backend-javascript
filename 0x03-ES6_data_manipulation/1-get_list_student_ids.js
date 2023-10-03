export default function getListStudentIds(list) {
  if (Array.isArray(list)) return list.map((e) => e.id);
  return [];
}
