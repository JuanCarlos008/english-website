import React from "react";

import { Css } from "./Css";
import { EmotionJs } from "./EmotionJs";
import { Html } from "./Html";
import { JavaScript } from "./JavaScript";
import { NextJs } from "./NextJs";
import { ReactJs } from "./ReactJs";
import { Sass } from "./Sass";

export const skillsSvgComponent = [
	{ title: "html5", component: <Html /> },
	{ title: "css3", component: <Css /> },
	{ title: "sass", component: <Sass /> },
	{ title: "javascript", component: <JavaScript /> },
	{ title: "react js", component: <ReactJs /> },
	{ title: "next.js", component: <NextJs /> },
	{ title: "emotionjs", component: <EmotionJs /> },
];
