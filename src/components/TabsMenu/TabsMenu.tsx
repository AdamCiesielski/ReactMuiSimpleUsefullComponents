import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ReactElement, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, styled, useTheme } from '@mui/material';
import { getTabsMenuDataForExamples, getTabsMenuDataForAnotherExamples } from '../../services/TabsMenuService/TabsMenuService';

/*
Solve the error:
MUI: The `value` provided to the Tabs component is invalid.
None of the Tabs' children match with "/tabsmenu/exampleone".
You can provide one of the following values: .
*/

interface TabProps {
    buttonText: string;
    url: string;
    iconPosition?: "start" | "end" | "bottom" | "top"
    icon?: ReactElement<any, any>;
}

interface StyledTabsProps {
    children?: React.ReactNode;
    value: string;
    onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        sx={{ p: 0, m: 0 }}
        component={Box}
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />
        }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: '100%',
        width: '100%',
        backgroundColor: '#000000',
    },

    ".MuiTabScrollButton-root": {
        color: "#ffffff",
        backgroundColor: "#000000",
        borderRadius: "8px",
        '& svg': {
            fontSize: '3rem',
        },
    },
    ".MuiTab-root": {
        textTransform: "none",
        color: "#000000",
    },
    ".MuiTab-root:selected": {
        textTransform: "none",
        color: "#ffffff"
    },

});

const TabsMenu: React.FC = ({}) => {
    const [value, setValue] = useState(window.location.pathname);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const location = useLocation();
    const navigate = useNavigate();
    const [tabsProps, setTabsProps] = useState<TabProps[]>([]) 

    const switchExamples = () => {
        setTabsProps([{buttonText:"", url:""}])
        if((window.location.pathname).includes("/another")){
            navigate("/tabsmenu/exampleone");
        }else{
            navigate("/anothertabsmenu/anotherexampleone");
        }
    }
    useEffect(() => { 
        async function fetchTopMenuData() {
            //setTabsProps([{buttonText:"", url:""}])
            try {
                if((window.location.pathname).includes('/another')) {
                    const tabsMenuData = await getTabsMenuDataForAnotherExamples();
                    setTabsProps(tabsMenuData);
                }else{
                    const tabsMenuData = await getTabsMenuDataForExamples();
                    setTabsProps(tabsMenuData);
                }
                
            } catch (error) {
                console.error(error);
            }
        }
        fetchTopMenuData();
    }, [location]);


    return (
        <Box>
            <Box sx={{ display: 'inline-flex', flexDirection: 'column', borderBottom: 1, borderColor: 'divider' }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                >
                    {
                        tabsProps.map(tabProps => {
                            return <Tab
                                label={tabProps.buttonText} value={tabProps.url} component={Link} to={tabProps.url} key={tabProps.url}
                                icon={tabProps.icon}
                                iconPosition={tabProps.iconPosition}
                            />
                        })
                    }
                </StyledTabs>

                
            </Box>
            <br/>
            <br/>
            <Button variant="contained" onClick={() => switchExamples()}>switch between examples</Button>
        </Box>
    );
}

export default TabsMenu;