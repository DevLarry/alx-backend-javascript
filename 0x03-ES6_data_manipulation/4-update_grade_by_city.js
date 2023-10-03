export default function updateStudentGradeByCity(list, city, newGrades) {
  if (Array.isArray(list) && Array.isArray(newGrades)) {
    return list
      .filter((e) => e.location === city)
      .map((e) => {
        let g = newGrades.find((i) => i.studentId === e.id);
        if (g) {
          g = g.grade
        }
        return {
          ...e,
          grade: g || 'N/A',
        };
      });
  }
  return [];
}
