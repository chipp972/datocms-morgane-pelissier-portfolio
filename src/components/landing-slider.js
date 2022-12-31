import React from 'react';
import { RightArrow as FlecheDroite } from './icons/fleche-droite-blanche.js';
import FlecheGauche from './icons/fleche-gauche-blanche.svg';
import flecheBas from './icons/fleche-bas-blanche.svg';

export const LandingSlider = () => (
  <>
    <div className="landing-slider project-1">
      <div className="background-deco">
        <div className="separator-top">
          <div className="bullet"></div>
          <div className="bullet"></div>
        </div>
        <div className="separator-middle">
          <div className="bullet"></div>
          <div className="bullet"></div>
        </div>
      </div>

      <div className="slides-wraper">
        <div className="slide project-1">
          <div className="slide-wrapper">
            <div className="deco-grid">
              <div className="deco-bar left">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
              <div className="deco-bar middle">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
              <div className="deco-bar right">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
            </div>
            <div className="logo-project">
              <img
                className="logo"
                src="/img/projet-credit-du-nord/logo-Credit-du-Nord.svg"
                alt="Logo Credit du nord"
              />
            </div>
            <div className="main-content">
              <div className="illustration magic-hover"></div>
              <div className="main-info">
                <span className="project-dates">2020-2021</span>
                <h2>Crédit du Nord</h2>
              </div>
            </div>
            <div className="btn cta magic-hover">
              Voir le projet
              <img src="/img/icons/lien-blanc.svg" alt="Icone voir le détail du projet" />
            </div>
            <div className="btn cta back magic-hover">
              <img src="/img/icons/retour-blanc.svg" alt="Icone retour au slider" />
            </div>
            <div className="project-position-bullet at-left">1</div>
            <div className="project-position-bullet at-right">1</div>
            <div className="project-position-bullet at-bottom">
              <img src={flecheBas} />
            </div>

            <div className="detailed-content">
              <div className="deco-grid">
                <div className="deco-bar left"></div>
                <div className="deco-bar middle"></div>
                <div className="deco-bar right"></div>
              </div>

              <section className="secondary-info">
                <div className="wrapper">
                  <div className="data-box">
                    <div className="label">Rôle</div>
                    <div className="value">Directrice artistique digital</div>
                  </div>
                  <div className="data-box">
                    <div className="label">Agence</div>
                    <div className="value">Teaminside</div>
                  </div>
                  <div className="data-box">
                    <div className="label">Année</div>
                    <div className="value">2020-2021</div>
                  </div>
                </div>
              </section>

              <section className="project-section limited-width section-1">
                <h2>
                  Refonte
                  <br />
                  de la charte
                  <br />
                  graphique
                  <br />
                  digitale
                </h2>
                <p className="intro">
                  Ma principale mission a été de retravailler l’image digitale du Crédit du Nord en
                  apportant à sa charte un peu de fraîcheur.
                </p>
              </section>

              <section className="project-section section-2 full-size-img"></section>

              <section className="project-section section-3">
                <div className="wrapper left">
                  <img
                    src="/img/projet-credit-du-nord/Credit-du-nord-img-4.png"
                    alt="illustration"
                  />
                </div>
                <div className="wrapper right">
                  <h2>Site à impact</h2>
                  <p>
                    Le Crédit du Nord a mis en place un incubateur à impact pour soutenir et
                    accompagner des entrepreneurs qui s’organisent autour d’objectifs sociaux et
                    environnementaux.
                    <br />
                    <br />
                    J’ai été chargée de créer la direction artistique du site internet et de la
                    décliner pour toutes les autres pages.
                  </p>
                  <a
                    className="text-link magic-hover"
                    href="https://incubateur-planete-a.fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Site internet{' '}
                    <img
                      className="icon"
                      src="/img/icons/lien-externe-jaune-small.svg"
                      alt="Fleche redirection"
                    />
                  </a>
                </div>
              </section>

              <section className="project-section section-3-bis">
                <video src="/img/projet-credit-du-nord/video_CDN_1.mp4" autoPlay loop muted></video>
              </section>

              <section className="project-section section-4">
                <img src="/img/projet-credit-du-nord/Couleurs-1.svg" alt="illustration" />
              </section>

              <section className="project-section section-5">
                <img src="/img/projet-credit-du-nord/Credit-du-nord-img-5.png" alt="illustration" />
              </section>

              <section className="project-section limited-width section-6">
                <div className="wrapper left">
                  <h2>Site Groupe</h2>
                  <p>
                    Le groupe Crédit du Nord représente le Crédit du Nord et ses 8 banques
                    régionales. On m’a confiée la refonte graphique de son site internet.
                  </p>
                </div>
                <div className="wrapper right">
                  <a
                    className="text-link magic-hover"
                    href="https://www.groupe-credit-du-nord.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Site internet{' '}
                    <img
                      className="icon"
                      src="/img/icons/lien-externe-jaune-small.svg"
                      alt="Fleche redirection"
                    />
                  </a>
                </div>
              </section>

              <section className="project-section section-7">
                <video src="/img/projet-credit-du-nord/video_CDN_2.mp4" autoPlay loop muted></video>
              </section>

              <section className="project-section section-8">
                <img src="/img/projet-credit-du-nord/Couleurs-2.svg" alt="illustration" />
              </section>

              <footer className="next-projet magic-hover">
                <div className="background-deco">
                  <div className="separator-top">
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                  </div>
                </div>
                <nav className="projects-nav-box">
                  <div className="btn next-project">
                    <FlecheDroite />
                    {/* <img src={flecheDroite} /> */}
                  </div>
                </nav>
                <div className="wrapper">
                  <h3>Projet suivant</h3>
                  <div className="next-project-title marquee-2">
                    <div className="title-wrapper">
                      Erasteel - Erasteel - Erasteel - Erasteel - Erasteel - Erasteel -&nbsp;
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>

        <div className="slide project-2">
          <div className="slide-wrapper">
            <div className="deco-grid">
              <div className="deco-bar left">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
              <div className="deco-bar middle">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
              <div className="deco-bar right">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
            </div>
            <div className="logo-project">
              <img
                className="logo"
                src="/img/projet-erasteel/logo-erasteel.svg"
                alt="Logo Erasteel"
              />
            </div>
            <div className="main-content">
              <div className="illustration magic-hover"></div>
              <div className="main-info">
                <span className="project-dates">2019</span>
                <h2>Erasteel</h2>
              </div>
            </div>
            <div className="btn cta magic-hover">
              Voir le projet
              <img src="/img/icons/lien-blanc.svg" alt="Icone voir le détail du projet" />
            </div>
            <div className="btn cta back magic-hover">
              <img src="/img/icons/retour-blanc.svg" alt="Icone retour au slider" />
            </div>
            <div className="project-position-bullet at-left">2</div>
            <div className="project-position-bullet at-right">2</div>
            <div className="project-position-bullet at-bottom">
              <img src="img/icons/fleche-bas-blanche.svg" />
            </div>

            <div className="detailed-content">
              <div className="deco-grid">
                <div className="deco-bar left"></div>
                <div className="deco-bar middle"></div>
                <div className="deco-bar right"></div>
              </div>

              <section className="secondary-info">
                <div className="wrapper">
                  <div className="data-box">
                    <div className="label">Rôle</div>
                    <div className="value">UI Designer</div>
                  </div>
                  <div className="data-box">
                    <div className="label">Agence</div>
                    <div className="value">Plan Net</div>
                  </div>
                  <div className="data-box">
                    <div className="label">Année</div>
                    <div className="value">2019</div>
                  </div>
                </div>
              </section>

              <section className="project-section limited-width section-1">
                <div className="wrapper left">
                  <h2>
                    Refonte
                    <br />
                    graphique
                    <br />
                    du site
                  </h2>
                  <p className="intro">
                    Mon rôle a été de décliner, suite à la mise en place d’une direction artistique,
                    toutes les autres pages (desktop et mobile) du site. Le tout en veillant à
                    respecter les contraintes graphiques, ergonomiques mais aussi techniques.
                  </p>
                </div>
                <div className="wrapper right">
                  <a
                    className="text-link magic-hover"
                    href="https://www.erasteel.com/fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Site internet{' '}
                    <img
                      className="icon"
                      src="/img/icons/lien-externe-jaune-small.svg"
                      alt="Fleche redirection"
                    />
                  </a>
                </div>
              </section>

              <section className="project-section section-2 full-size-img"></section>

              <section className="project-section section-3">
                <img src="/img/projet-erasteel/Couleurs-3.svg" alt="illustration" />
              </section>

              <section className="project-section section-4">
                <video src="/img/projet-erasteel/video_ERA_1.mp4" autoPlay loop muted></video>
              </section>

              <section className="project-section section-5">
                <img src="/img/projet-erasteel/Erasteel-img-4.png" alt="illustration" />
              </section>

              <section className="project-section section-6 full-size-img"></section>

              <footer className="next-projet magic-hover">
                <div className="background-deco">
                  <div className="separator-top">
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                  </div>
                </div>
                <nav className="projects-nav-box">
                  <div className="btn next-project">
                    <FlecheDroite />
                    {/* <img src={flecheDroite} /> */}
                  </div>
                </nav>
                <div className="wrapper">
                  <h3>Projet suivant</h3>
                  <div className="next-project-title marquee-3">
                    <div className="title-wrapper">
                      Radio France - Radio France - Radio France - Radio France - Radio France
                      -&nbsp;
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>

        <div className="slide project-3">
          <div className="slide-wrapper">
            <div className="deco-grid">
              <div className="deco-bar left">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
              <div className="deco-bar middle">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
              <div className="deco-bar right">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
            </div>
            <div className="logo-project">
              <img
                className="logo"
                src="/img/projet-radio-france/logo-radio-france.svg"
                alt="Logo Radio France"
              />
            </div>
            <div className="main-content">
              <div className="illustration magic-hover"></div>
              <div className="main-info">
                <span className="project-dates">2018-2019</span>
                <h2>Radio France</h2>
              </div>
            </div>
            <div className="btn cta magic-hover">
              Voir le projet
              <img src="/img/icons/lien-blanc.svg" alt="Icone voir le détail du projet" />
            </div>
            <div className="btn cta back magic-hover">
              <img src="/img/icons/retour-blanc.svg" alt="Icone retour au slider" />
            </div>
            <div className="project-position-bullet at-left">3</div>
            <div className="project-position-bullet at-right">3</div>
            <div className="project-position-bullet at-bottom">
              <img src="img/icons/fleche-bas-blanche.svg" />
            </div>

            <div className="detailed-content">
              <div className="deco-grid">
                <div className="deco-bar left"></div>
                <div className="deco-bar middle"></div>
                <div className="deco-bar right"></div>
              </div>

              <section className="secondary-info">
                <div className="wrapper">
                  <div className="data-box">
                    <div className="label">Rôle</div>
                    <div className="value">UI Designer</div>
                  </div>
                  <div className="data-box">
                    <div className="label">Agence</div>
                    <div className="value">Plan Net</div>
                  </div>
                  <div className="data-box">
                    <div className="label">Année</div>
                    <div className="value">2018-2019</div>
                  </div>
                </div>
              </section>

              <section className="project-section limited-width section-1">
                <h2>
                  Création
                  <br />
                  de landing pages
                  <br />& emailing
                </h2>
              </section>

              <section className="project-section section-2">
                <video src="/img/projet-radio-france/video_RF_1.mp4" autoPlay loop muted></video>
              </section>

              <section className="project-section section-3 full-size-img"></section>

              <section className="project-section section-4">
                <img src="/img/projet-radio-france/Radio-France-img-4.jpg" alt="illustration" />
              </section>

              <section className="project-section section-5">
                <img src="/img/projet-radio-france/Radio-France-img-5.jpg" alt="Photo Erasteel" />
              </section>

              <section className="project-section section-6">
                <img src="/img/projet-radio-france/Radio-France-img-6.jpg" alt="Photo Erasteel" />
              </section>

              <section className="project-section section-7">
                <img src="/img/projet-radio-france/Radio-France-img-7.png" alt="Photo Erasteel" />
              </section>

              <section className="project-section section-8">
                <img src="/img/projet-radio-france/Radio-France-img-8.jpg" alt="Photo Erasteel" />
              </section>

              <footer className="next-projet magic-hover">
                <div className="background-deco">
                  <div className="separator-top">
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                  </div>
                </div>
                <nav className="projects-nav-box">
                  <div className="btn next-project">
                    <FlecheDroite />
                    {/* <img src={flecheDroite} /> */}
                  </div>
                </nav>
                <div className="wrapper">
                  <h3>Projet suivant</h3>
                  <div className="next-project-title marquee-4">
                    <div className="title-wrapper">
                      Gefco - Gefco - Gefco - Gefco - Gefco - Gefco - Gefco -&nbsp;
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>

        <div className="slide project-4">
          <div className="slide-wrapper">
            <div className="deco-grid">
              <div className="deco-bar left">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
              <div className="deco-bar middle">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
              <div className="deco-bar right">
                <div className="bullet top"></div>
                <div className="bullet bottom"></div>
              </div>
            </div>
            <div className="logo-project">
              <img className="logo" src="/img/projet-gefco/logo-gefco.svg" alt="Logo Gefco" />
            </div>
            <div className="main-content">
              <div className="illustration magic-hover"></div>
              <div className="main-info">
                <span className="project-dates">2018-2019</span>
                <h2>Gefco</h2>
              </div>
            </div>
            <div className="btn cta magic-hover">
              Voir le projet
              <img src="/img/icons/lien-blanc.svg" alt="Icone voir le détail du projet" />
            </div>
            <div className="btn cta back magic-hover">
              <img src="/img/icons/retour-blanc.svg" alt="Icone retour au slider" />
            </div>
            <div className="project-position-bullet at-left">4</div>
            <div className="project-position-bullet at-right">4</div>
            <div className="project-position-bullet at-bottom">
              <img src="img/icons/fleche-bas-blanche.svg" />
            </div>

            <div className="detailed-content">
              <div className="deco-grid">
                <div className="deco-bar left"></div>
                <div className="deco-bar middle"></div>
                <div className="deco-bar right"></div>
              </div>

              <section className="secondary-info">
                <div className="wrapper">
                  <div className="data-box">
                    <div className="label">Rôle</div>
                    <div className="value">UI Designer</div>
                  </div>
                  <div className="data-box">
                    <div className="label">Agence</div>
                    <div className="value">Plan Net</div>
                  </div>
                  <div className="data-box">
                    <div className="label">Année</div>
                    <div className="value">2018-2019</div>
                  </div>
                </div>
              </section>

              <section className="project-section limited-width section-1">
                <div className="wrapper left">
                  <h2>
                    Refonte
                    <br />
                    graphique
                    <br />
                    du site
                  </h2>
                  <p className="intro">
                    Suite à un appel d’offre remporté par Plan Net, j’ai été amenée à travailler sur
                    l’interface utilisateur des pages du site.
                  </p>
                </div>
                <div className="wrapper right">
                  <a
                    className="text-link magic-hover"
                    href="https://www.gefco.net/fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Site internet{' '}
                    <img
                      className="icon"
                      src="/img/icons/lien-externe-jaune-small.svg"
                      alt="Fleche redirection"
                    />
                  </a>
                </div>
              </section>

              <section className="project-section section-2 full-size-img"></section>

              <section className="project-section section-3">
                <video src="/img/projet-gefco/video_GEF_1.mp4" autoPlay loop muted></video>
              </section>

              <section className="project-section section-4 full-size-img"></section>

              <footer className="next-projet magic-hover">
                <div className="background-deco">
                  <div className="separator-top">
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                  </div>
                </div>
                <nav className="projects-nav-box">
                  <div className="btn next-project">
                    <FlecheDroite />
                    {/* <img src={flecheDroite} /> */}
                  </div>
                </nav>
                <div className="wrapper">
                  <h3>Projet suivant</h3>
                  <div className="next-project-title marquee-5">
                    <div className="title-wrapper">
                      Crédit du Nord - Crédit du Nord - Crédit du Nord - Crédit du Nord -&nbsp;
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
