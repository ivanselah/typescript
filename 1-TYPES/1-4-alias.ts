{
  // π μ€μ Type Alias
  // μλ‘μ΄ νμμ λ΄κ° μ μ νλ€.
  type Text = string; // <= TextλΌλ string νμ
  const name: Text = 'Hello';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'Hello',
    age: 123,
  };

  // π String Literal Types
  type Name = 'name';
  let firstName: Name;
  // firstName = "Hello"; <== X λμΌν λ¬Έμμ΄λ§ ν λΉ κ°λ₯ν¨
  firstName = 'name';

  type Boal = true;
  let isOK: Boal = true;

  type SuperBoal = false;
  const isNotOk: SuperBoal = false;
}
