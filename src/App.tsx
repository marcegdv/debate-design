import FullWidth from './components/FullWidth';
import Card from './components/Card';

import TemplateV1 from './components/v1/ZComponent';
import TemplateV2 from './components/v2/ZComponent';

const App = (
    props: {
        dark?: boolean,
    }
): JSX.Element => {
    const isDark: boolean = props?.dark ?? false;
    return (
        <FullWidth dark={isDark}>
            <FullWidth dark={isDark}>
                <Card title='V1' dark={isDark}>
                    <TemplateV1  dark={isDark}/>
                </Card>
            </FullWidth>
            <FullWidth dark={isDark}>
                <Card title='V2' dark={isDark}>
                    <TemplateV2  dark={isDark}/>
                </Card>
            </FullWidth>
        </FullWidth>
    );
};

export default App;