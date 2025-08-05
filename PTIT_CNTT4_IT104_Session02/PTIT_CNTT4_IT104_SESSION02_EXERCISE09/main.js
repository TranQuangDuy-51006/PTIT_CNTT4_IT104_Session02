function getStudentSummary(student) {
  const sumScore = student.listMonHoc.reduce(
    (tong, mon) => tong + mon.score,
    0
  );
  const trungBinhCong = sumScore / student.listMonHoc.length;
  function danhHieu() {
    if (trungBinhCong >= 8) {
      return `Học sinh giỏi`;
    } else if (trungBinhCong >= 7) {
      return `Học sinh khá`;
    } else if (trungBinhCong >= 5) {
      return `Học sinh trung bình`;
    } else {
      return `Học sinh yếu`;
    }
  }
  let max = student.listMonHoc[0].score;
  let min = student.listMonHoc[0].score;
  let bestSubject = student.listMonHoc[0].subject;
  let weakestSubject = student.listMonHoc[0].subject;
  for (let value of student.listMonHoc) {
    if (value.score < min) {
      min = value.score;
      weakestSubject = value.subject;
    }
    if (value.score > max) {
      max = value.score;
      bestSubject = value.subject;
    }
  }

  console.log(`
    ${student.name} is ${student.age} years old
    Average score: ${trungBinhCong} -> ${danhHieu()}
    Best subject: ${bestSubject} (${max})
    Weakest subject: ${weakestSubject} (${min})
    `);
}

const student = {
  name: "DEV",
  age: 20,
  listMonHoc: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 },
  ],
};
getStudentSummary(student);
