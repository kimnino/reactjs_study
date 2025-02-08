// 1. If 문
let num = 9;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("오호");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  console.log("num은 2 이하입니다.");
}

// 2. Switch 문  -> If문과 기능은 동일, 다수의 조건을 처리할 때, 직관적이다.
let animal = "owl";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  default: {
    console.log("????");
  }
}
