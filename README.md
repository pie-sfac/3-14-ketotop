# <span id='top'>케토톱</span>

## ❤ 서비스 소개

**포인티 디자인 시스템 라이브러리을 개발하여 배포하는 프로젝트 입니다.**

- PDS(포인티 디자인 시스템)에 정의된 컬러, 타이포,
  컴포넌트를 라이브러리 형태로 개발하여 배포<br/>

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 💜 적용 방법

**Foundation 과 Component 파트 나누어 제작하였습니다**

## ✅ Foundation 파트

### 👉 Color

전역에 **FoundationStyles 컴포넌트** 설정

```jsx
...
<FoundationStyles/>
...
```

### 👉 Typography

#### Font

Foundation 모듈에 전역적으로 Font 설정

#### Typography

| value                                                        | meaning                                |
| ------------------------------------------------------------ | -------------------------------------- |
| **Headline, Title1, Title2, Title3, Title4, Title5, Title6** | Headline 과 Title 타이포그래피 입니다. |
| **Body1, Body2, Body3, Body4, Caption1, Caption2**           | Body 과 Caption 타이포그래피 입니다.   |

```jsx
...
// ❗ 'Body1' 부분을 원하는 Value 값으로 지정하시면 됩니다.
<TypographyStyles.Body1>
    Hello World
</TypographyStyles.Body1>;
...
```

### 👉 Icon

지정된 아이콘을 불러온다면, 정상적으로 작동이 됩니다.
|props | value | meaning |
|------|-------|---------|
|**name**|IconName|서버에 저장되어있는 아이콘 명을 입력하면 정상적으로 작동이 됩니다. ( 필수⭕ )|
|**height**|number|입력하면 해당 숫자만큼 높이가 지정됩니다. ( 필수❌ )|
|**width**|number|입력하면 해당 숫자만큼 너비가 지정됩니다. ( 필수❌ )|

> 📎 <a href='https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app/'>서버 URL</a> <br/>

```jsx
...
<IconStyles name='add' />
...
```

### 👉 SelectionControls

체크박스 와 라디오 중 원하는 컨트롤러를 불러올 수 있습니다.
|props | value | meaning |
|------|-------|---------|
|**type**|'checkbox','radio'|체크박스와 라디오 중 선택 가능합니다. ( 필수⭕ )|
|**selected**|boolean|선택되었을때와 그렇지 않았을때를 선택할 수 있습니다. ( 필수❌ )|
|**disabled**|boolean|동작의 가능유무를 선택할 수 있습니다. ( 필수❌ )|

```jsx
...
<SelectionControlsStyles type='radio' selected={true} disabled={false} />
...
```

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>

## 💛 팀원 소개

|                                 **FE 이광렬**                                 |                                  **FE 곽성재**                                   |                                   **FE 안태경**                                   |                                   **FE 최락현**                                   |
| :---------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/yedol1" height=180 width=180> | <img src="https://avatars.githubusercontent.com/ssssssjay" height=180 width=180> | <img src="https://avatars.githubusercontent.com/TaekyungAn" height=180 width=180> | <img src="https://avatars.githubusercontent.com/chasura416" height=180 width=180> |
|               [🔗 GitHub](https://github.com/yedol1)<br/> 팀장                |               [🔗 GitHub](https://github.com/ssssssjay)<br/> 팀원                |               [🔗 GitHub](https://github.com/TaekyungAn)<br/> 팀원                |               [🔗 GitHub](https://github.com/chasura416)<br/> 팀원                |

<br/>

<p align="right"><a href="#top">(Top)</a></p>

<br/>
