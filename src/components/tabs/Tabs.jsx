
import { v4 } from 'uuid'; // Importa v4 como uuidv4
import { StyledTabs } from './tabs.styles';

const tabs = ['MOON', 'MARS', 'EUROPA', 'TITAN'];

const Tabs = () => {
    return (
        <div>
            {tabs.map((tab, index) => (
                <StyledTabs key={v4()}>{tab}</StyledTabs>
            ))}
        </div>
    );
};

export default Tabs;