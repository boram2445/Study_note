//type 키워드, interface 키워드, class 모두 사용 가능하다.
//여기선 id를 생성해주고 싶기 때문에 class를 사용하였다.
export class Todo {
  //타입스크립트에서는 미리 프로퍼티를 정의하고, 해당 프로퍼티에
  //어떤 타입을 가진 값이저장되는지 명확히 밝혀야 한다.
  //클래스 이름은 타입으로도 사용할 수 있다.
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
