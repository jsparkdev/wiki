---
title: 객체의 타입
description: TypeScript에서 객체의 타입을 정의하는 방법에 대해 알아봅니다.
tags:
  - TypeScript
---

## type과 interface

TypeScript에서 객체의 타입을 정의하는 방법은 두 가지가 있습니다.

### type

모든 타입을 나타낼 수 있으며, 교차 타입을 이용해 객체 타입을 확장할 수 있습니다.

```ts
type Song = {
  title: string
  singer: string
}

type ReleaseData = {
  year: number
  month: number
  day: number
}

type SongWithReleaseData = Song & ReleaseData

const mySong: SongWithReleaseData = {
  title: "Hello World",
  singer: "Jun",
  year: 2024,
  month: 12,
  day: 12
}
```

### 인터페이스

객체와 함수를 나타낼 수 있으며 `extends`를 사용하여 여러 인터페이스를 상속할 수 있습니다.

```ts
interface Bird {
  wings: number
}

interface Person {
  talk: () => void
}

interface Robot {
  power: number
}

interface Monster extends Bird, Person, Robot {
  move: () => void
}

const monster: Monster = {
  wings: 4,
  talk: () => console.log("hello"),
  power: 100,
  move: () => console.log("go")
}
```

교차 타입은 사용할 때마다 다시 계산되는 반면, 인터페이스 상속은 한 번 계산된 후, 계속 재사용되므로 성능상 이점이 있습니다.

또한, 동일한 이름의 인터페이스는 자동으로 병합됩니다. 이는 예상치 못한 문제를 발생시킬 수 있습니다.

```ts
interface Person {
  name: string
}

interface Person {
  age: number
}

const user: Person = {
  name: "Jun",
  age: 50
}
```
### 비교

평소에는 `type`을 사용하다가, 상속이 필요한 경우 인터페이스를 사용하는 것을 권장합니다.

## 동적 키

객체 선언 후, 동적으로 키를 추가하려고 하면 오류가 발생합니다.

```ts
const user = {
  name: "Jun"
}

user.age = 30 // 오류 발생
```

TypeScript에게 잠재적으로 객체에 키가 추가될 수 있다고 알려야 합니다. 이는 두 가지 방법을 사용하여 수행할 수 있습니다.

유니언이나 리터럴과 같은 복잡한 키를 사용할 수 있으므로 레코드를 사용하는 것을 권장합니다.

```ts
// 인덱스 시그니처
type User = {
  name: string
  [index: PropertyKey]: unknown
}

// 레코드 (권장)
type User = Record<PropertyKey, unknown>
```

## object 타입

프리미티브 타입과 `null`이 아닌 모든 타입을 포함합니다.

거의 사용되지 않으며 이 타입을 사용하기보다는 레코드를 사용하는 것을 더 권장합니다.
