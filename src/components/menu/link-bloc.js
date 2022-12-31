import React from 'react';
import propTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { VerticalSeparator, HorizontalSeparator } from '../separator';
import clsx from 'clsx';
import './link-bloc.css';

export const LinkBloc = ({ name, href, isExternal, isDownload }) => {
  const additionalProps = isExternal
    ? {
        rel: 'noreferrer',
        target: '_blank'
      }
    : {};
  return (
    <>
      <HorizontalSeparator className="mobile-only" />
      <a className="link-col magic-hover" {...additionalProps} href={href}>
        <span className="label">
          {name}
          {isDownload ? (
            <div className={clsx('download', 'mobile-only')}>
              <img src="/img/icons/telechargement-jaune.svg" alt="Fleche téléchargement" />
            </div>
          ) : (
            <div className={clsx('redirection', 'mobile-only')}>
              <img src="/img/icons/lien-externe-jaune.svg" alt="Fleche redirection" />
            </div>
          )}
        </span>
        {isDownload ? (
          <div className={clsx('download', 'from-tablet-flex')}>
            <img src="/img/icons/telechargement-jaune.svg" alt="Fleche téléchargement" />
          </div>
        ) : (
          <div className={clsx('redirection', 'from-tablet-flex')}>
            <img src="/img/icons/lien-externe-jaune.svg" alt="Fleche redirection" />
          </div>
        )}
      </a>
      <VerticalSeparator className="from-tablet" />
    </>
  );
};

LinkBloc.propTypes = {
  name: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
  isExternal: propTypes.bool.isRequired,
  isDownload: propTypes.bool.isRequired
};
