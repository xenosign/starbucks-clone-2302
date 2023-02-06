function solution(str) {
  let strLen = str.length;
  let count = 0;
  let oneChar = "";
  let resultStr = "";
  let resultArr = [];
  let nextIndex = 0;

  for (var i = 0; i < strLen; i++) {
    oneChar = str.charAt(i);

    // 한글 체크용 정규 표현식
    const regExpKorean = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    const regExpSpace = /s/g;

    // 첫글자가 공백인 경우 카운트 하지 않도록 설정
    if (count === 0 && oneChar === " ") {
      nextIndex += 1;
      continue;
    }

    // 해당 글자가 한글인지 체크해서 한글이면 +2, 아니면 +1
    regExpKorean.test(oneChar) ? (count += 2) : (count += 1);

    // 과정 검증용 콘솔
    console.log(oneChar, i, count);

    // 80바이트로 딱 떨어지는 경우 해당 문자까지를 짤라서 리턴
    if (count === 80) {
      // 한번 자르고 나면 nextIndex 에서 다시 count 가 80 이상이 되는 지점을 잘라야 하므로 i + 1 에서 nextIndex 를 빼줌
      resultStr = str.substr(nextIndex, i + 1 - nextIndex);
      resultArr.push(resultStr);

      // 다음에 문자를 자를 시작 지점 설정
      nextIndex = i + 1;

      // 배열에 푸쉬 후 바이트 카운트 초기화
      count = 0;
    } else if (count > 80) {
      resultStr = str.substr(nextIndex, i - nextIndex);
      resultArr.push(resultStr);
      nextIndex = i;
      count = 0;
      // 한 글자를 더 카운트한 경우이므로 다음에 푸쉬할 문장에서 다시 검사할 수 있도록 i - 1 처리
      i -= 1;
    }
  }
  // 남은 문자열 푸쉬
  resultArr.push(str.substr(nextIndex, str.length));

  return resultArr;
}

let str =
  "이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 개발자를 대상으로 도커 전반에 대해 얕고 넓은 지식을 담고 있습니다. 도커가 등장한 배경과 도커의 역사, 그리고 도커의 핵심 개념인 컨테이너와 이미지에 대해 알아보고 실제로 도커를 설치하고 컨테이너를 실행해 보도록 하겠습니다.";

console.log(solution(str));
