## **Introduction**


📌 ***기술은 문제를 해결하기 위해 나온다.***

React JS가 JS가 가진 문제 중 어떤 점을 편리하게 만들었는지 살펴보자! 바닐라 JS와 React JS를 비교하면서 React JS의 장점을 정확히 알아보기!


## **Before React**

### Javascript로 Counter 구현하기

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RecapCounter</title>
  </head>
  <body>
    <h1>😁 버튼 누르기!</h1>
    <p>0회 눌렀습니다</p>
    <button>눌러주세요!</button>
    <script>
      const button = document.querySelector("button");
      const paragraph = document.querySelector("p");
      let count = 0;

      const onPressed = () => {
        count++; // 데이트를 업데이트하고 html도 업데이트 해야함!
        paragraph.innerText = `${count}회 눌렀습니다`; // html에 작성한 내용과 중복!!
      };

      // click이라고 기억해서 작성해야 함. 오타가 나도 모름!
      button.addEventListener("click", onPressed);

      // 코드가 늘어나면 헷갈릴 내용!
    </script>
  </body>
</html>

```


😵 **Javascript를 사용할 때 안 좋은 점**

1. 데이터를 업데이트 한 뒤에 html도 업데이트를 해야 한다.
2. innerText를 사용할 경우 html에 작성한 내용과 중복해서 작성해야 한다.
3. “click”처럼 실수가 발생할 수 있는 부분이 있다.
4. 이 모든 것은 코드가 늘어나면 더욱 헷갈린다!

### React를 사용 방법

2가지 script를 body안에 넣어준다.

```html
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
```

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```


> 📌 콘솔에서 React를 사용할 수 있으면 된다!



💡 **헷갈리는 내용 정리**

- **unpkg은** CDN(Content Delivery Network) 링크 모음 사이트다.
- **CDN**은 콘텐츠를 분산해서 저장한 뒤에 요청이 올 때마다 빠르게 내용을 전송해주는 서버 집단이다. CDN을 사용하면 서버에 올라가 있는 파일을 네트워크로 가져와 환경 설정 없이 라이브러리를 사용할 수 있다.
- **참고**
    - [https://velog.io/@reyang/React-00.-CodeSandBox-사용하기-with-CDN](https://velog.io/@reyang/React-00.-CodeSandBox-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-with-CDN)
    - https://co1nam.tistory.com/67


## **Our First React Element**

Vanilla JS를 사용할 때는 html을 만들고, interactive하게 만들고 싶은 부분을 javascript로 조작한 다음에 다시 html에 반영해야 했다. 하지만 React JS는 html을 직접 작성해서 만들지 않고 javascript로 시작해 html의 모든 요소를 만들고 조작한다!


✍️ **두 방법 비교**

- **vanilla JS로 만들 때**: `html`→ `javascript`→ `html`
- **React JS로 만들 때**: `javascript`→ `html`


React JS를 사용하려면 script로 react, react-dom을 가져와야 했다.


✍️ **React JS와 React DOM**

- **react JS**: 어플리케이션이 interactive하게 만들어주는 library(Engine)
- **react-dom**: react로 생성한 element를 html안에 넣을 수 있게 도와주는 library
react element를 body 안에 넣으려면 react-dom을 사용해야 한다.


```jsx
const root = document.getElementById("root");
const span = React.createElement( // argument로 element에 대한 정보를 더 넘겨 줄 수 있다.
  "span", // name of the html tag
  {
    id: "sexy-span", // property of the span
  },
  "Hello I'm a span" // content of the span
);

// ReactDOM.render(span, root); // (무엇을, 어디에) render 할 건지 명시!
ReactDOM.createRoot(root).render(span); // 18 버전
// [show it to the user] React element를 html으로 만들어서 html에 붙여넣기
```

## **Events in React**

react에서는 event를 property로 넘겨주면 된다!

```jsx
const root = document.getElementById("root");

let count = 0;

const header = React.createElement(
	"h1",
	{
		id: "header",
	},
	"Counter 😀"
);

const span = React.createElement("span", null, `${count}번 누르셨어요`);
const button = React.createElement(
	"button",
	{
		onclick: () => count++,
	},
	"눌러줘"
);

const div = React.createElement("div", null, [header, span, button]);
ReactDOM.createRoot(root).render(div);
```

## **Recap**

**React JS**: interactive한 것을 만들 수 있는 재료 집합

**ReactDom**: react element → HTML element

```html
<div id="root"></div>
```

## **JSX**

JSX는 react의 기능을 HTML의 문법과 비슷하게 구현할 수 있는 javascript 확장 문법이다. JSX를 사용하면 코드가 더 간결해지고, HTML과 비슷하게 생겨서 React.CreateElement 함수를 생으로 사용할 때보다 훨씬 코드를 이해하기 편리하다!

```jsx
const button = React.createElement(
	"button",
	{
		onclick: () => count++,
	},
	"눌러줘"
);
```

```jsx
const buttonJSX = <button onClick={() => count++}>눌러줘</button>;
```

> *하지만 JSX로 된 코드는 브라우저가 이해할 수 없기 때문에 babel을 이용해 javascript로 변환해 주어야 한다.*
> 

```jsx
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

```jsx
 <script type="text/babel">
```

## **JSX part Two**

JSX로 만든 element를 함수로 return하면 함수 이름을 element의 태그처럼 사용할 수 있다.

> *컴포넌트로 사용할 함수의 이름은 대문자로 시작해야 한다! 안그러면 html 태그로 사용했을 때 html 기본 태그로 생각한다.*
> 

```jsx
const Header = () => <h1 id="header">Counter 😀</h1>;
const Span = () => <span>누른 횟수는?</span>;
const Button = () => <button onClick={() => count++}>눌러줘</button>;

const Container = () => (
	<div>
		<Header />
		<Span />
		<Button />
	</div>
);

ReactDOM.createRoot(root).render(<Container />);
```

## **Understanding State**

데이터가 업데이트되면 UI를 새로 render해야 한다. 때문에 아래 코드에서 데이터를 변경한 이후에 render 함수를 호출하는 것이다. render가 호출되면 react.js는 새로 랜더링을 할 때 이전에 랜더링된 컴포넌트와 앞으로 랜더링할 컴포넌트를 비교하여 변경되는 부분만 새롭게 바꾼다.

```jsx
const root = document.getElementById("root");

let counter = 0;

function countUp() {
	counter++;
	render();
}

function render() {
	ReactDOM.createRoot(root).render(<Container />);
}

const Container = () => (
	<div>
		<h1>Counter 😀</h1>
		<span>누른 횟수는? {counter}회</span>
		<button onClick={countUp}>눌러줘</button>
	</div>
);

render();
```

## **setState part One**

React에서 데이터를 사용하면서 데이터가 변경될 때 UI를 자동으로 render하는 방법은 데이터를 useState를 이용해서 생성하고 업데이트 하는 것이다.

```jsx
const data = React.useState(); // data = [undefined, f]
```

```jsx
// 첫 번째 값은 데이터, 두 번째 값은 데이터를 업데이트할 때 사용하는 함수
const [counter, setCounter] = React.useState();
```

## **setState part Two**

modifier를 사용해서 데이터를 업데이트하면 데이터의 값이 변경된 후 자동으로 render한다.

```jsx
let [counter, setCounter] = React.useState(0);

const countUp = () => {
	setCounter(counter + 1);
};
```

## State Functions

modifier를 이용해 state를 바꿀 수 있다. 만약 state를 완전히 새로운 값으로 바꾸고 싶다면 새로운 값을 modifier에 인자로 넣어주면 된다. 만약 state를 이전 값을 이용해서 새로운 값으로 만들고 싶다면 modifier에 함수를 넣어서 이전 값을 함수의 파라미터로 받으면 된다.

```jsx
setCounter(123);
```

```jsx
setCounter((current) => current + 1);
```
