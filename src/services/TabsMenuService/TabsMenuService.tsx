import { ReactElement } from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface TabProps {
	buttonText: string;
	url: string;
	iconPosition?: "start" | "end" | "bottom" | "top";
	icon?: ReactElement<any, any>;
}

export const getTabsMenuDataForExamples = async (): Promise<TabProps[]> => {
	return [
		{ buttonText: "Example One", url: "/tabsmenu/exampleone", iconPosition: "start", icon: <AttachFileIcon/>},
		{ buttonText: "Example Two", url: "/tabsmenu/exampletwo" },
		{ buttonText: "Example Three", url: "/tabsmenu/examplethree" },
	];
};

export const getTabsMenuDataForAnotherExamples = async (): Promise<TabProps[]> => {
	return [
		{ buttonText: "Another example One", url: "/anothertabsmenu/anotherexampleone" },
		{ buttonText: "Another example Two", url: "/anothertabsmenu/anotherexampletwo" },
		{ buttonText: "Another example Three", url: "/anothertabsmenu/anotherexamplethree" },
	];
};
