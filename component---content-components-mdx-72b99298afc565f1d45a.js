(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{uY77:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return x}));var o=t("zLVn"),l=(t("q1tI"),t("7ljp")),b=t("z1h2"),c={},a=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",n)}},i=a("Accordion"),r=a("Button"),s=a("Checklist"),p=a("Box"),m=a("Chocolate"),h=a("Icon"),u=a("List"),d=a("Link"),j={_frontmatter:c},O=b.a;function x(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)(O,Object.assign({},j,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Component Palette"),Object(l.b)("p",null,"This page serves as a palette for all the components this project has to offer."),Object(l.b)("hr",null),Object(l.b)("h4",null,"Definitions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"WYSIWYG"),": What you see is what you get.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Component"),": A lego block like code element you can use for more advanced content like buttons.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"MD"),": Shorthand for Markdown")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"MDX"),": Shorthand for MarkdownExtended (ie. MDX is the name of the rendering engine we use.)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Child/Children"),": Content that is wrapped by a Component. New lines between content will be recognized as a new child.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Child Rule"),": A pattern introduced for more complex components that recognized each individual child as a repeatable element of a component. (ie. List, Checklist, ect.)"))),Object(l.b)("hr",null),Object(l.b)("h4",null,"Disclaimers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"This palette is primarily to showcase component usage in a vacuum, and to act as helpers.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Always remember. What you see is what you get. (WYSIWYG). We follow the markdown spec.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"There's no mobile styles for these really. Use at your own risk."))),Object(l.b)("hr",null),Object(l.b)("h1",null,"Accordion"),Object(l.b)("p",null,"Click the Accordion header to show and hide the content it offers."),Object(l.b)("p",null,"The first element is always the header. Every other element will be hidden away."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"<Accordion>Hello World This is hidden inside the Accordion.</Accordion>\n")),Object(l.b)("hr",null),Object(l.b)(i,{mdxType:"Accordion"},Object(l.b)("p",null,"Hello World"),Object(l.b)("p",null,"This is hidden inside the Accordion.")),Object(l.b)("hr",null),Object(l.b)("h1",null,"Button"),Object(l.b)("p",null,"It's a button. Not much more to it."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Dev Note(Réjon): Because this site doesn't provide any stateful functionality (besides light/dark modes), Buttons are built to serve as a unique visual display of links.")),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'<Button to="/"> ET phone Home </Button>\n')),Object(l.b)("hr",null),Object(l.b)(r,{to:"/",mdxType:"Button"}," ET phone Home "),Object(l.b)("hr",null),Object(l.b)("h1",null,"Checklist"),Object(l.b)("h4",null,"Child Rule in Effect"),Object(l.b)("p",null,"This is a non-functioning checklist component. It is simply styled to look like one."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"<Checklist>\n  Child A Child B\n  <Box>\n    Child C\n  </Box>\n</Checklist>\n")),Object(l.b)("hr",null),Object(l.b)(s,{mdxType:"Checklist"},Object(l.b)("p",null,"Child A"),Object(l.b)("p",null,"Child B"),Object(l.b)(p,{mdxType:"Box"},Object(l.b)("p",null,"Child C"))),Object(l.b)("hr",null),Object(l.b)("h1",null,"Chocolate (Box)"),Object(l.b)("h4",null,"Child Rule in Effect"),Object(l.b)("p",null,'Originally named "Chocolate Box" components, this component takes into consideration the child rule.\nEach child is recognized as a new element. Thus it\'s recommended for more diverse content to be contained\nby a ',Object(l.b)("inlineCode",{parentName:"p"},"Box")," component."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'<Chocolate>\n  <Box>\n    <Icon size={"40px"} name="maker" />\n    ##### Child A Some content about something\n  </Box>\n\n  <Box>\n    <Icon size={"40px"} name="globe" />\n    ##### Child B Some content about something\n  </Box>\n\n  <Box>\n    <Icon size={"40px"} name="wrench" />\n    ##### Child C Some content about something\n  </Box>\n</Chocolate>\n')),Object(l.b)("hr",null),Object(l.b)(m,{mdxType:"Chocolate"},Object(l.b)(p,{mdxType:"Box"},Object(l.b)(h,{size:"40px",name:"maker",mdxType:"Icon"}),Object(l.b)("h5",null,"Child A"),Object(l.b)("p",null,"Some content about something")),Object(l.b)(p,{mdxType:"Box"},Object(l.b)(h,{size:"40px",name:"globe",mdxType:"Icon"}),Object(l.b)("h5",null,"Child B"),Object(l.b)("p",null,"Some content about something")),Object(l.b)(p,{mdxType:"Box"},Object(l.b)(h,{size:"40px",name:"wrench",mdxType:"Icon"}),Object(l.b)("h5",null,"Child C"),Object(l.b)("p",null,"Some content about something"))),Object(l.b)("hr",null),Object(l.b)("h1",null,"List"),Object(l.b)("p",null,"The List component is great if you want to display content...in the form of....a list."),Object(l.b)("h4",null,"Child Rule in Effect"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"To get the most out of lists (ie. headers, subcontent, links) you MUST use a ",Object(l.b)("inlineCode",{parentName:"strong"},"Box")," or ",Object(l.b)("inlineCode",{parentName:"strong"},"Link")," component\nbased on your specific needs.")),Object(l.b)("hr",null),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'<List>\n\nElement A\n\nElement B\n\n</List>\n\n<List>\n\n<Box>\n\nElement A Header\n\nSome content below the header\n\n</Box>\n\nElement B with no subcontent\n\n<Box>\n\nElement C Header\n\nSome content below the header\n\n</Box>\n\n</List>\n\n<List>\n\n<Link to="/">\n\nLink Element A Header\n\nSome content below the header\n\n</Link>\n\n<Link to="https://makerdao.com/">\n\nExternal Link Element B Header\n\nSome content below the header\n\n</Link>\n\n</List>\n')),Object(l.b)("hr",null),Object(l.b)(u,{mdxType:"List"},Object(l.b)("p",null,"Element A"),Object(l.b)("p",null,"Element B")),Object(l.b)("hr",null),Object(l.b)(u,{mdxType:"List"},Object(l.b)(p,{mdxType:"Box"},Object(l.b)("p",null,"Element A Header"),Object(l.b)("p",null,"Some content below the header")),Object(l.b)("p",null,"Element B with no subcontent"),Object(l.b)(p,{mdxType:"Box"},Object(l.b)("p",null,"Element C Header"),Object(l.b)("p",null,"Some content below the header"))),Object(l.b)("hr",null),Object(l.b)(u,{mdxType:"List"},Object(l.b)(d,{to:"/",mdxType:"Link"},Object(l.b)("p",null,"Link Element A Header"),Object(l.b)("p",null,"Some content below the header")),Object(l.b)(d,{to:"https://makerdao.com/",mdxType:"Link"},Object(l.b)("p",null,"External Link Element B Header"),Object(l.b)("p",null,"Some content below the header"))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-components-mdx-72b99298afc565f1d45a.js.map