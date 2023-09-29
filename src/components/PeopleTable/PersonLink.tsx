import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

const MALE_SEX = 'm';
const isMale = (sex: string) => {
  return sex === MALE_SEX;
};

type Props = {
  person: Person
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { name, slug, sex } = person;

  return (
    <Link
      className={classNames({
        'has-text-danger': !isMale(sex),
      })}
      to={`../${slug}`}
    >
      {name}
    </Link>
  );
};