
import { v4 } from 'uuid'; // Importa v4 como uuidv4
import { StyledTabs } from './tabs.styles';

const tabs = ['MOON', 'MARS', 'EUROPA', 'TITAN'];

const Tabs = ({activeTab, setActiveTab}) => {
    return (
        <>
        <div>
            {tabs.map((tab, index) => (
                <StyledTabs  key={v4()} onClick={()=> TabClick(setActiveTab, index)}  $isActive={activeTab === index}>{tab}</StyledTabs>
            ))}
        </div>
        
        
        </>
    );
};

const TabClick = (setActiveTab, index)=>{
    setActiveTab(index);
    console.log(index);
}
export default Tabs;