import Welcome from './ex01_containment/WelcomeDialog'
import WelcomeDesc from './ex01_containment/WelcomeDesc'
import SplitPane from './ex02_containment/SplitPane';
import WelcomeDialog from './ex03_specialization/WelcomeDialog'
import AlarmDialog from './ex03_specialization/AlarmDialog'
import ProfileCard from './ex04_inheritance/ProfileCard'

function App() {
    return (
        <div className="App">
            <ProfileCard />
            <hr />
            <Welcome />
            <WelcomeDesc />
            {/* children이 여러개 일 경우 props의 속성이름을 여러개 지정해준다. */}
            <SplitPane
                left={<Welcome />} right={<WelcomeDesc />} />
            <hr />
            <WelcomeDialog />
            <AlarmDialog />
            <hr />
        </div>
    );
}

export default App;
