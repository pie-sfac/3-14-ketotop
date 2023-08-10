### 👉 Dialog

지정된 너비와 텍스트에 따라 가변 높이값을 가지는 **Dialog**를 사용할 수 있습니다.<br/>
넘치는 텍스트의 경우 말줄임 스타일을 주어 일정 높이를 벗어나지 못합니다.(마우스 오버시 모든 내용을 확인할 수 있습니다.)<br/>
**Dialog**의 버튼을 사용하여, 유저가 커스텀 이벤트를 발생시킬 수 있습니다.<br/>
우측 상단의 닫기버튼을 클릭 시 실행할 로직은 함수의 형태로 넘겨주어야 합니다.
|props | value | meaning |
|------|-------|---------|
|**title**|`string`|볼드체의 텍스트가 표시됩니다.( 필수⭕ )|
|**description**|`string`|`title` 밑으로 텍스트가 표시됩니다.( 필수❌ )|
|**onCloseEffect**|`() => void`|우측 상단에 닫기 버튼을 누르면 실행됩니다.( 필수⭕ )|
|**isOpen**|`boolean`|해당 상태에 따라 다이얼로그의 렌더 여부가 결정됩니다.( 필수⭕ )|

```jsx
...
<Cmp.Dialog.Display
  isOpen={BooleanState}
  title={'Title'}
  description={'Description'}
  onCloseEffect={onCloseDialog} // Custom Function
>
  <Cmp.Dialog.GrayButton onClick={...something custom logic...}>GrayBtn</Cmp.Dialog.GrayButton>
  <Cmp.Dialog.PriButton>PriBtn</Cmp.Dialog.PriButton>
</Cmp.Dialog.Display>
...
```

### 👉 Label

유저의 클릭이벤트와 상호작용하는 **Dropdown** 컴포넌트입니다.<br/>
두가지 유형의 **Dropdown** 컴포넌트를 사용할 수 있습니다.

- 첫번째 유형의 **Dropdown**
  | props | value | meaning |
  | --------------- | -------------------------- | ----------------------------------------------------------------------------- |
  | **value** | `string` | 유저가 선택한 값과 바인딩되는 값입니다.( 필수⭕ ) |
  | **items** | `string[]` | 선택해야하는 목록의 값들 입니다.( 필수⭕ ) |
  | **title** | `string` | 어떤 드롭다운인지 설명해주는 상단에 표시되는 텍스트입니다.( 필수⭕ ) |
  | **placeholder** | `string` | 초기에 표시 될 텍스트입니다. **value**가 있다면 **value**가 표시됩니다.( 필수⭕ ) |
  | **onChange** | `(params: string) => void` | 리스트를 클릭 시 해당 값을 인자로 받는 함수입니다.( 필수⭕ ) |
  | **width** | `string` | 사용자가 지정해주는 너비값입니다.( 필수⭕ ) |
  | **disabled** | `boolean` | 사용가능 여부를 나타내는 값입니다. **true**이면 스타일도 바뀝니다.( 필수❌ ) |

```jsx
...
<Cmp.Dropdown
  title={'title'}
  placeholder={'placeholder'}
  value={value}
  items={items}
  onChange={(selected) => setValue(selected)}
  width='30rem'
  disabled={false}
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
  items={itemList}
  value={value}
  onChange={(selected) => onSelect(selected)}
  onClose={(selected) => onClose(selected)}
  width='31.3rem'
></Cmp.ListDropdown>
...
```