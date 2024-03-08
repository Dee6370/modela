'use client'
import Prism from "prismjs";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { Implementation } from "base/app/(site)/model/[id]/page";
import { useEffect } from "react";
// import {javascript} from 'prismjs/plugins/'
   
  export function Implementations({implementationList}:{implementationList:Implementation[]}) {
    const data = [
      {
        label: "HTML",
        value: "html",
        desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
      },
      {
        label: "React",
        value: "react",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Vue",
        value: "vue",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
      {
        label: "Angular",
        value: "angular",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Svelte",
        value: "svelte",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
    ];

    useEffect(() => {
        const highlight = async () => {
          await Prism.highlightAll(); // <--- prepare Prism 
        };
        highlight(); // <--- call the async function
      }, [implementationList]); // <--- run when post updates
   
    return (
      <Tabs value="html">
        <TabsHeader placeholder={undefined}>
          {implementationList && implementationList.map((imp,index) => (
            <Tab placeholder={undefined} key={imp.id} value={imp.framework?imp.framework:imp.language}>
              {imp.framework?imp.framework:imp.language}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="min-h-[30rem]" placeholder={undefined}>
          {implementationList && implementationList.map((imp,index) => (
            <TabPanel key={imp.id} value={imp.framework?imp.framework:imp.language}>
            <pre>
            <code className={`language-${imp.language}`}>{
                imp.code
            }</code>
            </pre>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }