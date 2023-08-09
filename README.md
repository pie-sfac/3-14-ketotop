# <span id='top'>케토톱</span>

## ❤ 서비스 소개

**포인티 디자인 시스템 라이브러리을 개발하여 배포하는 프로젝트 입니다.**

- PDS(포인티 디자인 시스템)에 정의된 컬러, 타이포,
  컴포넌트를 라이브러리 형태로 개발하여 배포<br/>

<br/>

## 🏷️ 환경변수

- **VITE_SERVER_URL** : 이미지 업로드 서버 URL
<br/>

## 📖 사용법

> 📎 <a href='https://pds-demo-site.vercel.app/'>사용법 사이트 URL</a> <br/>
<br/>

## 💜 적용 방법

라이브러리를 다운 받아서 사용하시면 됩니다.

```bash
npm i pds-3-14
```

**📌 Foundation 과 Component 파트 나누어 제작하였습니다**

## ✅ Foundation 파트

Fnd ( Foundation ) Import 하여 사용

```jsx
import { Fnd } from 'pds-3-14';
```

### 👉 Color

전역에 **FoundationGlobalStyles 컴포넌트** 설정

```jsx
...
<Fnd.FoundationGlobalStyles/>
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
<Fnd.TypographyStyles.Body1>
    Hello World
</Fnd.TypographyStyles.Body1>;
...
```

### 👉 Layout

원하는 사이즈와 시스템 종류에 맞는 레이아웃이 도출이 됩니다.
|props | value | meaning |
|------|-------|---------|
|**size**|'tablet','pc','phone' ( 기본 : tablet )|입력하면 해당 사이즈에 맞는 레이아웃이 지정됩니다. ( 필수❌ )|
|**system**|'android','ios' ( 기본 : android )|입력하면 해당 시스템에 맞는 레이아웃이 지정됩니다. ( 필수❌ )|

```jsx
...
<Fnd.LayoutStyles size='tablet' system='android'>
    Hello World
</Fnd.LayoutStyles>;
...
```

### 👉 Icon

지정된 아이콘을 불러온다면, 정상적으로 작동이 됩니다.
|props | value | meaning |
|------|-------|---------|
|**name**|string|서버에 저장되어있는 아이콘 명을 입력하면 정상적으로 작동이 됩니다. ( 필수⭕ )|
|**extension**|string ( 기본 : 'svg' )|서버에 저장되어있는 아이콘 명의 확장자명을 입력하면 정상적으로 작동이 됩니다. ( 필수❌ )|
|**height**|number|입력하면 해당 숫자만큼 높이가 지정됩니다. ( 필수❌ )|
|**width**|number|입력하면 해당 숫자만큼 너비가 지정됩니다. ( 필수❌ )|

> 📎 <a href='https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app/'>서버 URL</a> <br/>

```jsx
...
<Fnd.IconStyles name={'add'} extension='svg' height={100} width={100} />
...
```

### 👉 Graphic

지정된 이미지을 불러온다면, 정상적으로 작동이 됩니다.
|props | value | meaning |
|------|-------|---------|
|**name**|string|서버에 저장되어있는 이미지 명을 입력하면 정상적으로 작동이 됩니다. ( 필수⭕ )|
|**extension**|string ( 기본 : 'svg' )|서버에 저장되어있는 이미지 명의 확장자명을 입력하면 정상적으로 작동이 됩니다. ( 필수❌ )|
|**height**|number|입력하면 해당 숫자만큼 높이가 지정됩니다. ( 필수❌ )|
|**width**|number|입력하면 해당 숫자만큼 너비가 지정됩니다. ( 필수❌ )|

> 📎 <a href='https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app/'>서버 URL</a> <br/>

```jsx
...
<Fnd.GraphicStyles name={'Album'} extension='svg' height={100} width={100} />
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
<Fnd.SelectionControlsStyles type='radio' selected={true} disabled={false} />
...
```

### 👉 ShadowBoxStyles

쉐도우 박스 속성을 css 에 적용하면 원하는 형태를 불러올수있습니다.

```jsx
...
const Test = styled.div`
  ${Fnd.ShadowBoxStyles}
`;
...
```

## ✅ Component 파트

Cmp ( Component ) Import 하여 사용 , 전역에 글로벌 스타일 추가 필수!

```jsx
import { Cmp , Fnd } from 'pds-3-14';
...
  <Fnd.FoundationGlobalStyles/>
...
```

### 👉 Button

사용자가 원하는 크기와 상태를 지정하면, 그에 맞는 컴포넌트를 불러올 수 있습니다.

| props        | value                                                         | meaning                                                          |
| ------------ | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| **size**     | 'x-small' , 'small' , 'medium' , 'large' , 'x-large' , 'full' | 지정된 사이즈 명을 입력하면 정상적으로 작동이 됩니다. ( 필수⭕ ) |
| **state**    | 'normal' , 'enabled' , 'disabled'                             | 지정된 상태를 입력하면 정상적으로 작동이 됩니다. ( 필수⭕ )      |
| **children** | ReactNode                                                     | 입력하면 해당 숫자만큼 높이가 지정됩니다. ( 필수⭕ )             |

1️⃣ Contained 스타일

```jsx
...
<Cmp.Button.Contained size='x-small' state='disabled'>
  {'버튼'}
</Cmp.Button.Contained>
...
```

2️⃣ Outline 스타일

```jsx
...
<Cmp.Button.Outline size='x-small' state='disabled'>
  {'버튼'}
</Cmp.Button.Outline>
...
```

### 👉 Item

사용자가 원하는 컴포넌트 명을 지정하면, 그에 맞는 컴포넌트를 불러올 수 있습니다.

1️⃣ Member_1 스타일 컴포넌트

| props                  | value                | meaning                                                                                                                          |
| ---------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **profImgUrl**         | string ( 기본 : "" ) | 프로필 이미지를 불러올 주소를 입력하면 정상적으로 불러옵니다. 정상적인 url 주소가 아니면, 기본 이미지가 렌더됩니다. ( 필수❌ )   |
| **name**               | string               | 환자의 이름을 입력합니다. ( 필수⭕ )                                                                                             |
| **isMale**             | boolean              | true 의 값일경우, '남' 이 출력되고, 반대일 경우 '여' 가 출력됩니다. ( 필수⭕ )                                                   |
| **membershipDuration** | [number 6개]         | 배열안에 시작년도,시작월,시작일,종료년도,종료월,종료일 을 입력하면 '00.00.00 ~ 00.00.00'과 같은 형태로 렌더가 됩니다. ( 필수⭕ ) |
| **MembershipUses**     | [number 2개]         | 배열안에 남은진료횟수,총진료횟수를 입력하면, '0회 / 0회' 와 같은 형태로 렌더가 됩니다. ( 필수⭕ )                                |
| **attendingPhysician** | string               | 주치의 의 이름을 입력합니다. ( 필수⭕ )                                                                                          |
| **publishDate**        | [number 3개]         | 배열안에 작성년도,작성월,작성일 을 입력하면, '2000-00-00' 와 같은 형태로 렌더가 됩니다. ( 필수⭕ )                               |
| **isOutlined**         | boolean              | true 의 값일경우, 최상위 컴포넌트에 border 값이 렌더되고, 반대일 경우 출력되지 않습니다. ( 필수⭕ )                              |

```jsx
...
<Cmp.Item.MemberOne
  publishDate={[2021, 10, 10]}
  membershipDuration={[2021, 10, 10, 2021, 10, 10]}
  membershipUses={[1, 10]}
  name={'이광렬'}
  attendingPhysician={'김철수'}
  isMale={true}
  isOutlined={true}
/>
...
```

2️⃣ Member_3 스타일 컴포넌트

| props                  | value                | meaning                                                                                                                        |
| ---------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **profImgUrl**         | string ( 기본 : "" ) | 프로필 이미지를 불러올 주소를 입력하면 정상적으로 불러옵니다. 정상적인 url 주소가 아니면, 기본 이미지가 렌더됩니다. ( 필수❌ ) |
| **name**               | string               | 환자의 이름을 입력합니다. ( 필수⭕ )                                                                                           |
| **phoneNumber**        | [string 3개]         | 배열안에 앞번호,중간번호,마지막번호 를 입력하면, '010-0000-0000' 와 같은 형태로 렌더가 됩니다. ( 필수⭕ )                      |
| **starRating**         | number               | 별점을 입력하면 해당 별점에 맞는 이미지와 문자열이 출력됩니다. ( 필수⭕ )                                                      |
| **attendingPhysician** | string               | 주치의 의 이름을 입력합니다. ( 필수⭕ )                                                                                        |
| **publishDate**        | [number 3개]         | 배열안에 작성년도,작성월,작성일 을 입력하면, '2000-00-00' 와 같은 형태로 렌더가 됩니다. ( 필수⭕ )                             |
| **isOutlined**         | boolean              | true 의 값일경우, 최상위 컴포넌트에 border 값이 렌더되고, 반대일 경우 출력되지 않습니다. ( 필수⭕ )                            |

```jsx
...
<Cmp.Item.MemberThree
  publishDate={[2021, 8, 1]}
  name={'이광렬'}
  phoneNumber={['111', '2222', '3333']}
  starRating={4.5}
  attendingPhysician={'김철수'}
  isOutlined={true}
/>
...
```

3️⃣ Staff_1 스타일 컴포넌트

| props           | value                | meaning                                                                                                                        |
| --------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **profImgUrl**  | string ( 기본 : "" ) | 프로필 이미지를 불러올 주소를 입력하면 정상적으로 불러옵니다. 정상적인 url 주소가 아니면, 기본 이미지가 렌더됩니다. ( 필수❌ ) |
| **name**        | string               | 스태프(주치의)의 이름을 입력합니다. ( 필수⭕ )                                                                                 |
| **phoneNumber** | [string 3개]         | 배열안에 앞번호,중간번호,마지막번호 를 입력하면, '010-0000-0000' 와 같은 형태로 렌더가 됩니다. ( 필수⭕ )                      |
| **starRating**  | number               | 별점을 입력하면 해당 별점에 맞는 문자열이 출력됩니다. ( 필수⭕ )                                                               |
| **memberCount** | number               | 담당환자의 수 를 입력합니다. ( 필수⭕ )                                                                                        |
| **memo**        | string               | 메모할 텍스트를 입력합니다. ( 필수⭕ )                                                                                         |
| **isOutlined**  | boolean              | true 의 값일경우, 최상위 컴포넌트에 border 값이 렌더되고, 반대일 경우 출력되지 않습니다. ( 필수⭕ )                            |

```jsx
...
<Cmp.Item.StaffOne
  name={'이광렬'}
  phoneNumber={['111', '2222', '3333']}
  starRating={4.5}
  memberCount={10}
  memo='메모'
  isOutlined={true}
/>
...
```

4️⃣ Record 스타일 컴포넌트
|props | value | meaning |
|------|-------|---------|
|**name**|string|스태프(주치의)의 이름을 입력합니다. ( 필수⭕ )|
|**publishDate**|[number 3개] | 배열안에 작성년도,작성월,작성일 을 입력하면, '2000-00-00' 와 같은 형태로 렌더가 됩니다. ( 필수⭕ )|
|**templateName**|string| 템플릿 명을 입력합니다. ( 필수⭕ )|
|**attendingPhysician**|string| 담당 주치의 이름을 입력합니다. ( 필수⭕ )|
|**isOutlined**|boolean| true 의 값일경우, 최상위 컴포넌트에 border 값이 렌더되고, 반대일 경우 출력되지 않습니다. ( 필수⭕ )|

```jsx
...
<Cmp.Item.Record
  publishDate={[2021, 10, 10]}
  templateName={'템플릿 이름'}
  attendingPhysician={'김철수'}
  isOutlined={true}
/>
...
```

5️⃣ TheraphyCenter 스타일 컴포넌트
|props | value | meaning |
|------|-------|---------|
|**publishDate**|[number 3개] | 배열안에 작성년도,작성월,작성일 을 입력하면, '2000-00-00' 와 같은 형태로 렌더가 됩니다. ( 필수⭕ )|
|**videoName**|string| 비디오 명을 입력합니다. ( 필수⭕ )|
|**uploadCount**|number| 업로드 비디오 횟수를 입력합니다. ( 필수⭕ )|
|**isOutlined**|boolean| true 의 값일경우, 최상위 컴포넌트에 border 값이 렌더되고, 반대일 경우 출력되지 않습니다. ( 필수⭕ )|

```jsx
...
<Cmp.Item.TheraphyCenter
  publishDate={[2021, 10, 10]}
  videoName='비디오 이름'
  uploadCount={10}
  isOutlined={true}
/>
...
```

6️⃣ Message 스타일 컴포넌트
|props | value | meaning |
|------|-------|---------|
|**publishDate**|[number 3개] | 배열안에 작성년도,작성월,작성일 을 입력하면, '2000-00-00' 와 같은 형태로 렌더가 됩니다. ( 필수⭕ )|
|**text**|string| 후기 텍스트를 입력합니다. ( 필수⭕ )|
|**starRating**|number| 별점을 입력하면 해당 별점에 맞는 이미지가 출력됩니다. ( 필수⭕ )|
|**isOutlined**|boolean| true 의 값일경우, 최상위 컴포넌트에 border 값이 렌더되고, 반대일 경우 출력되지 않습니다. ( 필수⭕ )|

```jsx
...
<Cmp.Item.Message
  publishDate={[2021, 10, 10]}
  text='메시지'
  starRating={4.5}
  isOutlined={true}
/>
...
```

### 👉 PopupMenu

사용자가 최대 4개의 아이템 리스트를 넣으면, 그에 해당하는 컴포넌트가 출력됩니다.

| props          | value                                      | meaning                                                               |
| -------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| **headerType** | 'NavigationBar' , 'AppBar'                 | 상단에 어떤 header 가 존재하는지에 따라 마진값이 다릅니다. ( 필수❌ ) |
| **itemList**   | [string?],[string?, string?].. 튜플 총 4개 | 배열에 아이템 리스트 최대 4개 까지 설정가능합니다. ( 필수⭕ )         |

```jsx
...
<Cmp.PopupMenu
  headerType='NavigationBar'
  itemList={['item1', 'item2', 'item3', 'item4']}
/>
...
```

### 👉 Tabs

사용자가 최대 10개의 탭메뉴를 넣을수 있습니다.
선택된 tab 은 하나만 표시할수있습니다. 또한, 탭메뉴를 지정해두고 실제 UI 상에서 렌더될 탭메뉴도 필수로 선택해주셔야 합니다.

| props           | value                     | meaning                                                              |
| --------------- | ------------------------- | -------------------------------------------------------------------- |
| **tapList**     | (string 혹은 undefined)[] | 최대 10개의 탭메뉴를 지정할 수 있습니다. ( 필수⭕ )                  |
| **selected**    | number                    | 선택될 탭메뉴 인덱스 번호를 선택합니다. ( 필수⭕ )                   |
| **showMenuIdx** | number[]                  | 보여질 탭메뉴의 인덱스 번호를 선택하여 배열에 입력합니다. ( 필수⭕ ) |

```jsx
...
<Cmp.Tabs
  tapList={['탭메뉴1','탭메뉴2','탭메뉴3','탭메뉴4',
    '탭메뉴5','탭메뉴6','탭메뉴7','탭메뉴8','탭메뉴9','탭메뉴10'
  ]}
  selected={0}
  showMenuIdx={[0, 1, 2, 3, 7, 8, 9]}
  />
...
```

### 👉 Navigation

원하는 페이지를 입력하면 형식에 맞는 네비게이션바가 나타납니다.

#### NavigationTop

| props    | value                                                          | meaning                                                           |
| -------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| **page** | 'home','reserve','memeber','center','mypage' ( 기본 : 'home' ) | 입력하면 해당 페이지에 맞는 네비게이션바가 지정됩니다. ( 필수❌ ) |

#### NavigationBottom

| props    | value                                                          | meaning                                                           |
| -------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| **page** | 'home','reserve','memeber','center','mypage' ( 기본 : 'home' ) | 입력하면 해당 페이지에 맞는 네비게이션바가 지정됩니다. ( 필수❌ ) |

```jsx
...
<Cmp.NavigationBarTop page='center' />
<Cmp.NavigationBarBottom page='home' />
...
```

### 👉 AppBar

원하는 사이즈와 타입에 따른 앱바가 나타납니다.

| props        | value                                      | meaning                                                                              |
| ------------ | ------------------------------------------ | ------------------------------------------------------------------------------------ |
| **size**     | 'large','medium','full' ( 기본 : 'large' ) | 서버에 저장되어있는 아이콘 명을 입력하면 정상적으로 작동이 됩니다. ( 필수❌ )        |
| **pagename** | string ( 기본 : '페이지네임' )             | 원하는 페이지명을 입력하면 앱바에 나타납니다. ( 필수⭕ )                             |
| **type**     | {icon:{'icon_L','icon_R'}}                 | 서버에 저장되어있는 아이콘 명을 입력하면 앱바 우측에 아이콘이 나타납니다. ( 필수❌ ) |
| **type**     | {text:{'text_L','text_R'}}                 | 원하는 버튼명을 입력하면 앱바 우측에 해당 이름의 버튼이 나타납니다. ( 필수❌ )       |
| **type**     | {count:{'count','text'}}                   | 텍스트에 원하는 버튼명과 카운트에 변수를 넣어주면 앱바 우측에 나타납니다. ( 필수❌ ) |

```jsx
...
<Cmp.AppBar
  size='large'
  pagename='페이지네임'
  type={{
    icon: { icon_L: 'add', icon_R: 'notice' },
  }}
/>
...
```

### 👉 Banners

원하는 레이아웃 스타일, 텍스트 타입, 텍스트/이미지의 위치를 설정한 배너를 만들수 있습니다.

| props          | value                              | meaning                                                                       |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| **type**       | 'fill','outline' ( 기본 : 'fill' ) | 서버에 저장되어있는 아이콘 명을 입력하면 정상적으로 작동이 됩니다. ( 필수❌ ) |
| **normalText** | string                             | 텍스트를 입력하면 일반 두께의 텍스트가 나타납니다. ( 필수❌ )                 |
| **boldText**   | string                             | 텍스트를 입력하면 두꺼운 두께의 텍스트가 나타납니다. ( 필수❌ )               |
| **src**        | string                             | 원하는 이미지 주소를 입력하면 이미지가 나타납니다. ( 필수❌ )                 |
| **$reverse**   | boolean ( 기본 : false )           | true값을 넣으면 텍스트와 이미지의 위치가 좌우로 반전됩니다. ( 필수❌ )        |
| **$manual**    | boolean ( 기본 : true )            | false값을 넣으면 이미지를 배너의 크기에 맞춰 넣을 수 있습니다. ( 필수❌ )     |

```jsx
...
<Cmp.Banners
  normalText='시리어스 근적외선'
  boldText='대량구매 특별할인 최대 40%'
  src={이미지파일}
/>
...
```

### 👉 Thumbnails

원하는 유형의 비디오/이미지의 썸네일을 만들수 있습니다.

#### 1️⃣ VideoThumbnail

| props           | value                                                                   | meaning                                                                                                                     |
| --------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **state**       | 'normal', 'delete', 'select', 'video_play', 'error' ( 기본 : 'normal' ) | 원하는 유형의 상태를 입력하면 해당 유형의 스타일이 썸네일에 적용됩니다. ( 필수❌ )                                          |
| **src**         | string                                                                  | 원하는 이미지 주소를 입력하면 이미지가 나타납니다. ( 필수❌ )                                                               |
| **runningtime** | number                                                                  | `ms`단위로 숫자가 입력되면 `분:초`의 형태로 썸네일 우측 하단에 표시됩니다. 값이 없을경우 `0:00` 으로 표시됩니다. ( 필수❌ ) |

#### 2️⃣ ImageThumbnail

| props     | value                                                     | meaning                                                                            |
| --------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **state** | 'normal', 'delete', 'select', 'error' ( 기본 : 'normal' ) | 원하는 유형의 상태를 입력하면 해당 유형의 스타일이 썸네일에 적용됩니다. ( 필수❌ ) |
| **src**   | string                                                    | 원하는 이미지 주소를 입력하면 이미지가 나타납니다. ( 필수❌ )                      |

```jsx
...
<Cmp.VideoThumbnail src={이미지주소} state='normal' runningtime={65200} />
<Cmp.ImageThumbnail src={이미지주소} state='error' />
...
```

### 👉 Dialog

지정된 너비와 텍스트에 따라 가변 높이값을 가지는 Dialog를 사용할 수 있습니다.<br/>
넘치는 텍스트의 경우 말줄임 스타일을 주어 일정 높이를 벗어나지 못합니다.
|props | value | meaning |
|------|-------|---------|
|**title**|`string`|볼드체의 텍스트가 표시됩니다.( 필수⭕ )|
|**description**|`string`|`title` 밑으로 텍스트가 표시됩니다.( 필수❌ )|
|**grayButtonName**|`string`|회색 버튼에 텍스트가 표시됩니다.( 필수⭕ )|
|**priButtonName**|`string`|파란 버튼에 텍스트가 표시됩니다.( 필수❌ )|
|**onCloseEffect**|`() => void`|우측 상단에 닫기 버튼을 누르면 실행됩니다.( 필수⭕ )|
|**onGrayEffect**|`() => void`|회색 버튼을 누르면 실행됩니다.( 필수⭕ )|
|**onPriEffect**|`() => void`|파란 버튼을 누르면 실행됩니다.( 필수❌ )|
|**isOpen**|`boolean`|해당 상태에 따라 다이얼로그의 렌더 여부가 결정됩니다.( 필수⭕ )|

```jsx
...
<Cmp.Dialog
  isOpen={BooleanState}
  title={'Title'}
  description={'Description'}
  grayButtonName={'Button 1'}
  priButtonName={'Button 2'}
  onGrayEffect={() => console.log('clicked gray')}
  onPriEffect={() => console.log('clicked pri')}
  onCloseEffect={() => console.log('clicked close')}
/>;
...
```

### 👉 Dropdown

유저의 클릭이벤트와 상호작용하는 `Dropdown` 컴포넌트입니다.<br/>
두가지 유형의 `Dropdown` 컴포넌트를 사용할 수 있습니다.

- 첫번째 유형의 `Dropdown`
  | props | value | meaning |
  | --------------- | -------------------------- | ----------------------------------------------------------------------------- |
  | **value** | `string` | 유저가 선택한 값과 바인딩되는 값입니다.( 필수⭕ ) |
  | **items** | `string[]` | 선택해야하는 목록의 값들 입니다.( 필수⭕ ) |
  | **title** | `string` | 어떤 드롭다운인지 설명해주는 상단에 표시되는 텍스트입니다.( 필수⭕ ) |
  | **placeholder** | `string` | 초기에 표시 될 텍스트입니다. `value`가 있다면 `value`가 표시됩니다.( 필수⭕ ) |
  | **onChange** | `(params: string) => void` | 리스트를 클릭 시 해당 값을 인자로 받는 함수입니다.( 필수⭕ ) |
  | **width** | `string` | 사용자가 지정해주는 너비값입니다.( 필수⭕ ) |

```jsx
...
<Cmp.Dropdown
  title={'title'}
  placeholder={'placeholder'}
  value={value}
  items={items}
  onChange={(selected) => setValue(selected)}
  width='300px'
></Cmp.Dropdown>
...
```

- 두번째 유형의 `ListDropdown`
  |props | value | meaning |
  |------|-------|---------|
  |**category**|`string`|좌측에 표시 될 대분류를 알려주는 텍스트입니다.( 필수⭕ )|
  |**items**|`string[]`|좌측에 표시 된 대분류에 속하는 값들입니다.( 필수⭕ )|
  |**value**|`string`|유저가 선택한 값과 바인딩되는 값입니다.( 필수⭕ )|
  |**width**|`string`|사용자가 지정해주는 너비값입니다.( 필수⭕ )|
  |**onChange**|`(params: string) => void`|리스트를 클릭 시 해당 값을 인자로 받는 함수입니다.( 필수⭕ )|
  |**onClose**|`(params: string) => void`|우측의 닫기 버튼 클릭 시 해당 리스트의 값을 인자로 받는 함수입니다.( 필수⭕ )|

```jsx
...
<Cmp.ListDropdown
  category={'오른쪽 다리'}
  items={subCategory['오른쪽 다리']}
  value={value}
  onChange={(selected) => onSelect(selected)}
  onClose={(selected) => onClose(selected)}
  width={'313px'}
></Cmp.ListDropdown>
...
```

### 👉 TextField

사용자에게 입력을 받는 커스텀 `input` 컴포넌트 요소입니다.<br/>
아래에 적힌 `props`를 제외하고도 `HTML input element`의 속성들을 모두 `props`로 내려줄 수 있습니다.(예시: `placeholder`)
|props | value | meaning |
|------|-------|---------|
|**label**|`string`|좌측 상단에 설명이 표시됩니다. 클릭 시 포커스 됩니다.( 필수⭕ )|
|**message**|`string`|부가설명의 내용을 가지고 하단에 회색으로 표시되는 텍스트입니다.( 필수❌ )|
|**errorMessage**|`string`|하단에 빨간색으로 표시되는 텍스트입니다. `$error`가 `true`일 때만 렌더됩니다.( 필수❌ )|
|**successMessage**|`string`|하단에 초록색으로 표시되는 텍스트입니다. `$success`가 `true`일 때만 렌더됩니다.( 필수❌ )|
|**$error**|`boolean`|우측 상단에 닫기 버튼을 누르면 실행됩니다.( 필수❌ )|
|**$success**|`boolean`|회색 버튼을 누르면 실행됩니다.( 필수❌ )|

```jsx
...
 <Cmp.TextField
  placeholder='이름을 입력해주세요'
  label='이름'
  value={userName}
  message={'10자 이상의 이름를 입력해주세요'}
  successMessage={'Success Message'}
  onBlur={(e) => setIsSuccess(validator(e.target.value))}
  onChange={(e) => setUserName(e.target.value)}
  $success={isSuccess}
/>
...
```

### 👉 Snackbar

사용자에게 알림사항을 하단에서 표시해주는 `Snackbar` 컴포넌트 입니다.<br/>
제공되는 커스텀 훅인 `useSnackbar`와 함께 사용해야 합니다.(인자로는 `duration`을 받습니다)<br/>

```ts
/**
 * 사용자가 스낵바 컴포넌트를 쉽게 쓸 수 있도록 만든 커스텀 훅입니다
 * Cmp에 같이 export되니 Cmp.useSnackbar로 사용할 수 있습니다
 * @param {number} ms - 스낵바의 알림 지속시간 입니다
 * @returns {[string, (string) => void]} [snackbarMessage, setSnackbarMessage] - [렌더할 메세지, 문자열을 입력받는 세터함수]
 */
function useSnackbar(ms) {}
```

컴포넌트에 제공되는 `duration`과 `useSnackbar`의 인자는 같은 값을 가져야 예상대로 동작합니다.<br/>
`setSnackbarMessage`는 `string`을 인자로 받습니다.
|props | value | meaning |
|------|-------|---------|
|**message**|`string`|유저에게 알려야 할 내용을 가진 텍스트입니다.( 필수⭕ )|
|**duration**|`number`|알림 지속시간 입니다. 단위는 `ms`입니다. 지속시간 뒤에 스낵바가 언마운트 됩니다.( 필수⭕ )|
|**isAppbar**|`boolean`|`true`이면 하단과 `12px` 여백을 가지고, 아니면 `24px` 여백을 가집니다.( 필수⭕ )|
|**width**|`string`|스낵바가 가지는 너비값입니다. 설정이 없다면 `1024px`을 가집니다.( 필수❌ )|

```jsx
import { Cmp } from 'pds-3-14';

// 사용자애 따라서 destructuring을 사용하여도 좋습니다
// const { Snackbar, useSnackbar } = Cmp;

// 안전한 렌더를 위한 전역상수 선언을 권고합니다
const SNACKBAR_DURATION = 5000;

const App = () => {
  const [snackbarMessage, setSnackbarMessage] = Cmp.useSnackbar(SNACKBAR_DURATION);

  ...
  return (
    <Cmp.Snackbar
      message={snackbarMessage}
      duration={SNACKBAR_DURATION}
      isAppbar={false}
    />
  )
  ...
}
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
