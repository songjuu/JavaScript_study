//Map과 Set의 목적: 데이터의 구성, 검색, 사용을 효율적으로 처리>
// 기존의 객체 또는 배열보다

//map
//key에 어떤 데이터 타입도 다 들어올 수 있다.
//map은 키가 정렬된 순서로 저장되기 때문이다.
//> 검색, 삭제, 제거, 여부 확인 제공함

const myMap = new Map();
myMap.set("key", "value");

//
myMap.get("key");

//set과 get은 pair다.
//반복적인 부분이 상당히 중요-> method: keys, values, entries
