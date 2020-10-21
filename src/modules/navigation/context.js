import React, { createContext, useContext, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";


import { UrlConverter, TitleConverter } from "@utils";

export const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be within a NavigationProvider');
  }

  return context; 
}

const NavigationProvider = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { headerFiles, headerConfigFiles, footerFiles, socialLinks } = useStaticQuery(graphql`
    query getNavigationData {
      # Regex for all files that are NOT config files
      allMdx: allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "//([\\\\w]{2})/(?!header.mdx|index.mdx|sidenav.mdx|example.mdx|social.mdx|footer.mdx|404.mdx|.js|.json)/"
          }
        }
      ) {
        edges {
          node {
            headings(depth: h1) {
              value
            }
            fileAbsolutePath
            frontmatter {
              title
              order
            }
          }
        }
      }


    #Get files that have header/headerOrder frontmatter
      headerFiles: allMdx(
        filter: {
          frontmatter: { header: { in: true } }
          fileAbsolutePath: {
            regex: "//([\\\\w]{2})/(?!header.mdx|example.mdx|index.mdx|404.mdx|footer.mdx)/"
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              header
              headerOrder
              headerLabel
            }
            fileAbsolutePath
            headings(depth: h1) {
              value
            }
          }
        }
      }
    }
  `);

  const headerLinkEdges = headerFiles.edges;

  //allMDX will return all header.mdx files at top level locale folders.
  //Find only the one we need for our current locale and use it's body in the MDX renderer below.
  const headerDataLinks = headerLinkEdges
    .sort((a, b) => {
      const aNode = {
        ...a.node,
        title: TitleConverter(a.node),
        headerOrder: a.node.frontmatter.headerOrder,
      };

      const bNode = {
        ...b.node,
        title: TitleConverter(b.node),
        headerOrder: b.node.frontmatter.headerOrder,
      };

      if (aNode.headerOrder === null && bNode.headerOrder !== null) {
        return 1;
      } else if (aNode.headerOrder !== null && bNode.headerOrder === null) {
        return -1;
      }

      if (aNode.headerOrder === null && bNode.headerOrder === null) {
        if (aNode.headerOrder === null && bNode.headerOrder === null) {
          if (aNode.title === bNode.title) return 0;
          return aNode.title;
        }

        if (aNode.headerOrder === bNode.headerOrder) {
          if (aNode.title === bNode.title) return 0;
          return aNode.title;
        }

        return 0;
      }

      if (aNode.headerOrder < bNode.headerOrder) return -1;
      if (aNode.headerOrder > bNode.headerOrder) return 1;
      return 0;
    })
    .map(({ node }, index) => {
      const title = TitleConverter(node);
      const url = UrlConverter(node);

      return {
        url,
        title,
      };
    });

  

  const showMobileMenu = (scrollBeforeMenuOpen) => {
    if (typeof window !== "undefined") {
      //Solution from: https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
      if (mobileNavOpen) {
        //We're hiding the menu. Remove the fixed styling, put scroll position back.
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollBeforeMenuOpen);
      } else {
        //We're showing the menu. Add fixed styling so the user doesn't scroll the window when in the menu.
        scrollBeforeMenuOpen = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.width = "100vw";
        document.body.style.top = `-${scrollBeforeMenuOpen}px`;
      }

      setMobileNavOpen(true);
    }
  }

  const hideMobileMenu = (scrollBeforeMenuOpen) => {
    if (mobileNavOpen) {
      if (typeof window !== "undefined") {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollBeforeMenuOpen);

        setMobileNavOpen(false);
      }
    }
  }

  return (
    <NavigationContext.Provider
      value={{
        mobileNavOpen,
        showMobileMenu, 
        hideMobileMenu,
      }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
