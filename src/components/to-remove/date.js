import React from 'react';
import propTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

export const ProjectDate = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

ProjectDate.propTypes = {
  dateString: propTypes.string.isRequired
};
