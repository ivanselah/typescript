{
  // Array 2κ°μ§ λ°©λ²
  const fruits: string[] = ["π", "π"]; // <- readonly νμ© π
  const scroes: Array<number> = [1, 2, 3]; // <- readonly νμ©μλ¨

  // μ λ¬λ μΈμλ₯Ό ν¨μλ΄λΆμμ λ³κ²½ν  μ μλλ‘
  function printArray(fruits: readonly string[]) {}

  // Tuple (λ°°μ΄μ΄κΈ΄νμ§λ§ μλ‘λ€λ₯Έ νμμ κ°μ§ μ μμ)
  // λ°°μ΄μΈλ±μ€λ‘ μ κ·Όνλ―λ‘ κ°λμ±μ΄ μμ’μ ==> interface, type alias, class λ‘λμ²΄ν΄μ μ¬μ©
  let student: [string, number];
  student = ["name", 123];

  console.log(student[0]);
}
