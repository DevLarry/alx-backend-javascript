export default function getStudentsByLocation(list, city, newGrades) {
  if (Array.isArray(list) && Array.isArray(newGrades)) {
    return list
      .filter((e) => e.location === city)
      .map((e) => {
        let g = newGrades.reduce((i) => i.studentId === e.id);
        if (g.length) {
          g = g[0].grade
        }
        return {
          ...e,
          grade: g || 'N/A',
        };
      });
  }
  return [];
}