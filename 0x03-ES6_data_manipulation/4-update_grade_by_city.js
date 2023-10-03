export default function getStudentsByLocation(list, city, newGrades) {
  if (Array.isArray(list) && Array.isArray(newGrades)) {
    return list
      .filter((e) => e.location === city)
      .map((e) => {
        return {
          ...e,
          grade: newGrades
            .find((i) => i.studentId === e.id)?.grade || 'N/A'
        };
      });
  }
  return [];
}
