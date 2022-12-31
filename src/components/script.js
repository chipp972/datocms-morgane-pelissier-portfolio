export const setup = () => {
  let elContainer = document.querySelector('.container');

  let elProjectsNavBox = document.querySelector('.projects-nav-box');
  let elPreviousProjectNavBtn = document.querySelector('.btn.previous-project');
  let elNextProjectNavBtn = document.querySelector('.btn.next-project');

  let elLandingSlider = document.querySelector('.landing-slider');

  let elShowProject1Btn = document.querySelector('.slides-wraper .project-1 .btn.cta');
  let elShowProject1Img = document.querySelector(
    '.slides-wraper .project-1 .main-content .illustration'
  );
  let elHideProject1Btn = document.querySelector('.slides-wraper .project-1 .btn.cta.back');

  let elShowProject2Btn = document.querySelector('.slides-wraper .project-2 .btn.cta');
  let elShowProject2Img = document.querySelector(
    '.slides-wraper .project-2 .main-content .illustration'
  );
  let elHideProject2Btn = document.querySelector('.slides-wraper .project-2 .btn.cta.back');

  let elShowProject3Btn = document.querySelector('.slides-wraper .project-3 .btn.cta');
  let elShowProject3Img = document.querySelector(
    '.slides-wraper .project-3 .main-content .illustration'
  );
  let elHideProject3Btn = document.querySelector('.slides-wraper .project-3 .btn.cta.back');

  let elShowProject4Btn = document.querySelector('.slides-wraper .project-4 .btn.cta');
  let elShowProject4Img = document.querySelector(
    '.slides-wraper .project-4 .main-content .illustration'
  );
  let elHideProject4Btn = document.querySelector('.slides-wraper .project-4 .btn.cta.back');

  let projectsQty = 4;
  let projectDisplayed = 1;

  // https://www.pprakash.com/blog/vanilla-js-marquee
  function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);

    if (!parentSelector) {
      return;
    }

    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);

    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }

  //after window is loaded
  //1 class selector for marquee
  //2 marquee speed 0.2
  window.addEventListener('load', Marquee('.marquee', 0.2));
  window.addEventListener('load', Marquee('.marquee-2', 0.2));
  window.addEventListener('load', Marquee('.marquee-3', 0.2));
  window.addEventListener('load', Marquee('.marquee-4', 0.2));
  window.addEventListener('load', Marquee('.marquee-5', 0.2));

  function majProjectInSlider() {
    if (projectDisplayed > projectsQty) {
      projectDisplayed = 1;
    } else if (projectDisplayed < 0) {
      projectDisplayed = 1;
    }

    elProjectsNavBox?.classList.remove('project-1', 'project-2', 'project-3', 'project-4');
    elLandingSlider?.classList.remove('project-1', 'project-2', 'project-3', 'project-4');

    elProjectsNavBox?.classList.add('project-' + projectDisplayed);
    elLandingSlider?.classList.add('project-' + projectDisplayed);

    elContainer?.classList.remove(
      'pj-1-in-slide',
      'pj-2-in-slide',
      'pj-3-in-slide',
      'pj-4-in-slide'
    );
    elContainer?.classList.add('pj-' + projectDisplayed + '-in-slide');
  }

  majProjectInSlider();

  function showNextProject() {
    projectDisplayed += 1;
    majProjectInSlider();
  }
  function showPreviousProject() {
    projectDisplayed -= 1;
    majProjectInSlider();
  }
  function showSpecificProject(projectId) {
    projectDisplayed = projectId;
    majProjectInSlider();
  }

  elNextProjectNavBtn?.addEventListener(
    'click',
    function () {
      showNextProject();
    },
    false
  );
  elPreviousProjectNavBtn?.addEventListener(
    'click',
    function () {
      showPreviousProject();
    },
    false
  );

  function showProjectDetails(projectId) {
    elContainer?.classList.toggle('project-opened');
    elContainer?.classList.add('pj-' + projectDisplayed);
  }
  function hideProjectDetails(projectId) {
    document
      .querySelector('.container .landing-slider .project-' + projectDisplayed + ' .slide-wrapper')
      ?.scrollTo(0, 0);
    setTimeout(function () {
      elContainer?.classList.toggle('project-opened');
      elContainer?.classList.remove('pj-1', 'pj-2', 'pj-3', 'pj-4');
    }, 60);
  }

  elShowProject1Btn?.addEventListener(
    'click',
    function () {
      showProjectDetails(1);
    },
    false
  );
  elShowProject1Img?.addEventListener(
    'click',
    function () {
      showProjectDetails(1);
    },
    false
  );
  elHideProject1Btn?.addEventListener(
    'click',
    function () {
      hideProjectDetails(1);
    },
    false
  );

  elShowProject2Btn?.addEventListener(
    'click',
    function () {
      showProjectDetails(2);
    },
    false
  );
  elShowProject2Img?.addEventListener(
    'click',
    function () {
      showProjectDetails(2);
    },
    false
  );
  elHideProject2Btn?.addEventListener(
    'click',
    function () {
      hideProjectDetails(2);
    },
    false
  );

  elShowProject3Btn?.addEventListener(
    'click',
    function () {
      showProjectDetails(3);
    },
    false
  );
  elShowProject3Img?.addEventListener(
    'click',
    function () {
      showProjectDetails(3);
    },
    false
  );
  elHideProject3Btn?.addEventListener(
    'click',
    function () {
      hideProjectDetails(3);
    },
    false
  );

  elShowProject4Btn?.addEventListener(
    'click',
    function () {
      showProjectDetails(4);
    },
    false
  );
  elShowProject4Img?.addEventListener(
    'click',
    function () {
      showProjectDetails(4);
    },
    false
  );
  elHideProject4Btn?.addEventListener(
    'click',
    function () {
      hideProjectDetails(4);
    },
    false
  );

  // Gestion next project footer btn

  function showNextProjectDetails() {
    document
      .querySelector('.container .landing-slider .project-' + projectDisplayed + ' .slide-wrapper')
      ?.scrollTo(0, 0);

    hideProjectDetails(projectDisplayed);

    setTimeout(function () {
      showNextProject();
      showProjectDetails(projectDisplayed);
    }, 60);
  }

  document.querySelector('.container .project-1 .next-projet')?.addEventListener(
    'click',
    function () {
      showNextProjectDetails();
    },
    false
  );
  document.querySelector('.container .project-2 .next-projet')?.addEventListener(
    'click',
    function () {
      showNextProjectDetails();
    },
    false
  );
  document.querySelector('.container .project-3 .next-projet')?.addEventListener(
    'click',
    function () {
      showNextProjectDetails();
    },
    false
  );
  document.querySelector('.container .project-4 .next-projet')?.addEventListener(
    'click',
    function () {
      showNextProjectDetails();
    },
    false
  );

  // Gestion redirection depuis menu screen

  // function showSpecificProjectFromMenu(projectId) {
  //   if (elContainer?.classList.contains('project-opened')) {
  //     hideProjectDetails(projectDisplayed);
  //   }

  //   setTimeout(function () {
  //     showSpecificProject(projectId);
  //     showProjectDetails(projectDisplayed);

  //     toggleMenuScreenDisplay();
  //   }, 60);
  // }

  // document.querySelector('.container .project-link.project-1')?.addEventListener(
  //   'click',
  //   function () {
  //     showSpecificProjectFromMenu(1);
  //   },
  //   false
  // );
  // document.querySelector('.container .project-link.project-2')?.addEventListener(
  //   'click',
  //   function () {
  //     showSpecificProjectFromMenu(2);
  //   },
  //   false
  // );
  // document.querySelector('.container .project-link.project-3')?.addEventListener(
  //   'click',
  //   function () {
  //     showSpecificProjectFromMenu(3);
  //   },
  //   false
  // );
  // document.querySelector('.container .project-link.project-4')?.addEventListener(
  //   'click',
  //   function () {
  //     showSpecificProjectFromMenu(4);
  //   },
  //   false
  // );

  let animationSliderInProgress = false;
  elContainer?.addEventListener('wheel', function () {
    if (!animationSliderInProgress && !elContainer?.classList.contains('project-opened')) {
      if (event.deltaY < 0 && projectDisplayed > 1) {
        showPreviousProject();
      } else if (event.deltaY > 0) {
        showNextProject();
      }
      animationSliderInProgress = true;
      setTimeout(function () {
        animationSliderInProgress = false;
      }, 1000);
    }
  });

  const projectToDisplay = 1;
  const specificProjectToDisplay = false;

  // TODO: highlight a project when asking for a specific project
  /*
if(isset($_GET['project']) && ($_GET['project'] == 1 || $_GET['project'] == 2 || $_GET['project'] == 3 || $_GET['project'] == 4)){
    $projectToDisplay = $_GET['project'];
    $specificProjectToDisplay = true;
}

if(specificProjectToDisplay) {
  showProjectDetails(projectToDisplay);
}
*/

  const elSlidesWraperForIntro = document.querySelector(
    '.container .landing-slider .slides-wraper'
  );

  if (elSlidesWraperForIntro) {
    const style = getComputedStyle(elSlidesWraperForIntro)?.transition;
    elSlidesWraperForIntro.style.transition = 'none';

    showSpecificProject(projectToDisplay);

    setTimeout(function () {
      if (elSlidesWraperForIntro) {
        elSlidesWraperForIntro.style.transition = style;
      }
    }, 60);
  }

  // console.log(elContainer);
  // if (elContainer) {
  //   elContainer.style.opacity = 1;
  // }
};
