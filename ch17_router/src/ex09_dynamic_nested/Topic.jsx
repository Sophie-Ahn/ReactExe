import { useParams } from "react-router-dom";

export default function Topic({ contents }) {
    // 현재 컴포넌트가 라우팅된 변수값을 얻을 수 있다.
    const params = useParams();
    console.log(params);
    const topic_id = params.topics_id;
    let selected_topic = {
        title: "sorry",
        description: "Not Found",
    };
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].id === Number(topic_id)) {
            selected_topic = contents[i];
            break;
        }
    }

    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    );
}
