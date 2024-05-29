import Dialog from "./Dialog";

// Dialog를 가져다가 title과 message속성을 특별하게 정의해준다.
// 즉, '구체화했다', 이것을 Specialization이라고 부른다.
export default function WelcomeDialog(props) {
    return <Dialog title="굉장해!" message="엄청나!!" />;
}
