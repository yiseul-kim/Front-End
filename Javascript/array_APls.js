{
    const fruits = ['사과','바나나','딸기'];
    const result = fruits.join('|')
    console.log(result);
}

{
    const fruits = '사과, 바나나, 딸기';
    const result = fruits.split(',');
    console.log(result);
}

{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
}

// Q4. make new array without the first two elements
// A. slice
{
    const array = [1, 2, 3, 4, 5];
}
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  // 밑에는 배열 
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  

  // Q5. find a student with the score 90 학생의 점수가 90점인 학생

  {
    const result = students.find((student) => student.score === 90);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' 
  // scores 점수만 들어있는 새로운 배열 만들기
  // result should be: [45, 80, 90, 66, 88]
  // map : 원하는 형태로 추출 혹은 배열을 조작해서 사용하고 싶을때 
  {
    const result = students.map((student) => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  //  점수가 50점보다 작은 학생이 있는지 없는지 확인
  // 확인하는(true, false) API : some
  {
    console.clear();
    const result = students.some((student) => student.score <= 50);
    console.log(result);

    // 모든 배열의 조건을 만족해야할때 검사할때는 every
    const result2 = !students.every((student)=> student.score>=50);
    console.log(result2);
  }
  
  // Q9. compute students' average score
  // 모든 학생의 점수의 합을 구하기 
  // reduce : 누적된 결과값을 return
  // riduceRight : 거꾸로 누적됨 
  {
    console.clear();
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log( result / students.length );
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  // 학생들의 모든 점수를 string으로 변환해서 만들기 
  // map과 join을 합해서 만들수 있음. 
  {
    console.clear();
    const result = students.map(student => student.score)
    .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  // 학생들의 순서대로 정렬(sort)해서 string으로 만들기 

  {
    console.clear();
    const result = students
    .map(student => student.score)
    .sort((a, b)=> a - b )
    .join();
    console.log(result);
  }