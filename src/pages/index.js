import React from 'react';
import { MenuScreen } from '../components/menu/menu-screen';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import { magicMouse } from 'magicmouse.js';
import PropTypes from 'prop-types';
import { HorizontalSeparator } from '../components/separator';
import { Bubble } from '../components/bubble/bubble';
import { RightArrow } from '../components/icons/fleche-droite-blanche';
import { ProjectSlider } from '../components/project-slider/project-slider';
import { projectData } from '../project-data';

import '../styles/global.css';
import 'magicmouse.js/css/magic-mouse.css';

const options = {
  cursorOuter: 'circle-basic',
  hoverEffect: 'circle-move',
  hoverItemMove: false,
  defaultCursor: false,
  outerWidth: 30,
  outerHeight: 30
};

const Home = ({ data: { site, blog } }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [currentProject, setCurrentProject] = React.useState(0);
  const [isProjectDetailVisible, setIsProjectDetailVisible] = React.useState(false);
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  React.useEffect(() => {
    magicMouse(options);
    setIsVisible(true);
  }, []);

  // TODO: Remove
  console.log({ currentProject, isProjectDetailVisible, isMenuVisible });

  const lastProjectPosition = projectData.projectList.length - 1;

  return (
    <div
      className="container"
      style={{ opacity: isVisible ? 1 : 0, overflow: isProjectDetailVisible ? 'auto' : 'hidden' }}>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <MenuScreen
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        setIsProjectDetailVisible={setIsProjectDetailVisible}
      />
      <HorizontalSeparator
        style={{ opacity: isProjectDetailVisible ? 0 : 1 }}
        className="horizontal-separator-top">
        <nav className="projects-nav-box">
          <Bubble
            style={{ marginRight: 10 }}
            isVisible={currentProject > 0}
            onClick={() => setCurrentProject((currentProject) => Math.max(0, currentProject - 1))}>
            <RightArrow style={{ transform: 'rotate(180deg)' }} />
          </Bubble>
          <Bubble
            isVisible
            onClick={() =>
              setCurrentProject((currentProject) =>
                currentProject === lastProjectPosition ? 0 : currentProject + 1
              )
            }>
            <RightArrow />
          </Bubble>
        </nav>
      </HorizontalSeparator>
      <HorizontalSeparator
        style={{ opacity: isProjectDetailVisible ? 0 : 1 }}
        className="horizontal-separator-middle"
      />
      <ProjectSlider
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        isProjectDetailVisible={isProjectDetailVisible}
        setIsProjectDetailVisible={setIsProjectDetailVisible}
      />
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      favicon: PropTypes.object
    }),
    blog: PropTypes.shape({
      seo: PropTypes.object
    })
  })
};

export default Home;

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

// allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
//   nodes {
//     title
//     slug
//     excerpt
//     date
//     coverImage {
//       large: gatsbyImageData(width: 1500)
//       small: gatsbyImageData(width: 760)
//     }
//     author {
//       name
//       picture {
//         gatsbyImageData(
//           layout: FIXED
//           width: 48
//           height: 48
//           imgixParams: { sat: -100 }
//         )
//       }
//     }
//   }
// }
