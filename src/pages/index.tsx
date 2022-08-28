import FullWidth from '../components/FullWidth';
import Card from '../components/Card';

import ComponentV1 from '../components/design1/Component';
import ComponentV2 from '../components/design2/Component';

const App = (
    props: {
        dark?: boolean,
    }
): JSX.Element => {
    const isDark: boolean = props?.dark ?? false;
    return (
        <FullWidth dark={isDark}>
            <FullWidth dark={isDark}>
                <Card title='Diseño nº 1' dark={isDark}>
                    <ComponentV1  dark={isDark}/>
                </Card>
            </FullWidth>
            <FullWidth dark={isDark}>
                <Card title='Diseño nº 2' dark={isDark}>
                    <ComponentV2  dark={isDark}/>
                </Card>
            </FullWidth>
        </FullWidth>
    );
};

export default App;