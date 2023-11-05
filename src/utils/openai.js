import OpenAI from "openai";
import {  OPENAI_KEY4 } from "./constant";

const openai  = new OpenAI({ 
    apiKey: `${process.env.REACT_APP_OPENAI_KEY}`, 
    dangerouslyAllowBrowser: true
})

export default openai