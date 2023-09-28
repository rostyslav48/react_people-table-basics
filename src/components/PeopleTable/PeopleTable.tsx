import React from 'react';

import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../../types';
import { TableLink } from './TableLink';

type Props = {
  people: Person[],
};

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const { person } = useParams();

  if (!people.length) {
    return (
      <p data-cy="noPeopleMessage">
        There are no people on the server
      </p>
    );
  }

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(({
          slug,
          sex,
          name,
          born,
          died,
          motherName = '-',
          fatherName = '-',
          mother,
          father,
        }) => (
          <tr
            key={slug}
            data-cy="person"
            className={classNames({
              'has-background-warning': slug === person,
            })}
          >
            <TableLink
              name={name}
              sex={sex}
              slug={slug}
            />

            <td>{sex}</td>
            <td>{born}</td>
            <td>{died}</td>
            {mother
              ? (
                <TableLink
                  name={mother.name}
                  sex={mother.sex}
                  slug={mother.slug}
                />
              )
              : (
                <td>{motherName}</td>
              )}

            {father
              ? (
                <TableLink
                  name={father.name}
                  sex={father.sex}
                  slug={father.slug}
                />
              )
              : (
                <td>{fatherName}</td>
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};