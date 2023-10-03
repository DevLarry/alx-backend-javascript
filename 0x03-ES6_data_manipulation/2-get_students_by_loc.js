export default function getStudentsByLocation(list, city) {
  if (Array.isArray(list)) return list.filter((e) => e.location === city);
  return [];
}
