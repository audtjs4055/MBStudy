// function sayHi() {   // (1) 함수 생성
//     console.log( "Hello" );
//   }
  
//   let func = sayHi;    // (2) 함수 복사
  
//   func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
//   sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.


// let sum = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
//     let result = a + b;
//     return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
//   };
  
//   console.log( sum(1, 2) ); // 3


// let map = new Map();

// map.set('1', 'str1');   // 문자형 키
// map.set(1, 'num1');     // 숫자형 키
// map.set(true, 'bool1'); // 불린형 키

// // 객체는 키를 문자형으로 변환한다는 걸 기억하고 계신가요?
// // 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다. 따라서 아래의 코드는 출력되는 값이 다릅니다.
// console.log( map.get(1)   ); // 'num1'
// console.log( map.get('1') ); // 'str1'

// console.log( map.size ); // 3




// // let now = new Date();
// // console.log( now ); // 현재 날짜 및 시간이 출력됨

// let start = new Date(); // 측정 시작

// // 1970년 1월 1일 0시 0분 0초(UTC+0)를 나타내는 객체
// let Jan01_1970 = new Date(0);
// console.log( Jan01_1970 );

// // 1970년 1월 1일의 24시간 후는 1970년 1월 2일(UTC+0)임
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log( Jan02_1970 );

// // 31 Dec 1969
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log( Dec31_1969 );

// let date = new Date("2017-01-26");
// console.log(date);
// // 인수로 시간은 지정하지 않았기 때문에 GMT 자정이라고 가정하고
// // 코드가 실행되는 시간대(timezone)에 따라 출력 문자열이 바뀝니다.
// // 따라서 얼럿 창엔
// // Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// // 혹은
// // Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)등이 출력됩니다.

// let end = new Date();

// console.log( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` );



// // 현재 일시
// let date = new Date();

// // 현지 시간 기준 시
// console.log( date.getHours() );

// // 표준시간대(UTC+0, 일광 절약 시간제를 적용하지 않은 런던 시간) 기준 시
// console.log( date.getUTCHours() );


// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };
  
//   let json = JSON.stringify(student);
  
//   console.log(typeof json); // 문자열이네요!
  
//   console.log(json)


// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   console.log( pow(2, 3) ); // 8
