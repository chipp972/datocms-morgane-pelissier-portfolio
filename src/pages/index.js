import React from 'react';
import { MenuScreen } from '../components/menu/menu-screen';
import { LandingSlider } from '../components/landing-slider';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import { magicMouse } from 'magicmouse.js';
import PropTypes from 'prop-types';
import { setup } from '../components/script';
import { HorizontalSeparator } from '../components/separator';

import '../styles/global.css';
// import "../styles/old.css";
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
  const [currentProject, setCurrentProject] = React.useState('0');
  const [isProjectDetailVisible, setIsProjectDetailVisible] = React.useState(false);
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  React.useEffect(() => {
    magicMouse(options);
    setup();
    setIsVisible(true);
  }, []);

  console.log({ currentProject, isProjectDetailVisible, isMenuVisible });

  return (
    <div
      className="container"
      style={{ opacity: isVisible ? 1 : 0, overflow: isProjectDetailVisible ? 'auto' : 'hidden' }}
    >
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      {/* <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <nav className="projects-nav-box">
        <div className="btn previous-project magic-hover">
          <img src="img/icons/fleche-gauche-blanche.svg" />
        </div>
        <div className="btn next-project magic-hover">
          <img src="img/icons/fleche-droite-blanche.svg" />
        </div>
      </nav> */}
      <MenuScreen
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        setIsProjectDetailVisible={setIsProjectDetailVisible}
      />
      <HorizontalSeparator
        style={{ opacity: isProjectDetailVisible ? 0 : 1 }}
        className="horizontal-separator-top"
      />
      <HorizontalSeparator
        style={{ opacity: isProjectDetailVisible ? 0 : 1 }}
        className="horizontal-separator-middle"
      />
      <LandingSlider />
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
