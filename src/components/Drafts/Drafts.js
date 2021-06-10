import React, { useState, useEffect } from 'react';
import './Drafts.css';
import Draft from './Draft';

export default function Drafts({ drafts }) {
  const [display, setDisplay] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    selected?.classList?.remove('hidden');
    return () => {
      selected?.classList?.add('hidden');
    };
  }, [selected]);

  const mapDrafts = () =>
    drafts.map((d, i) => (
      <Draft
        key={i}
        draft={d}
        index={i}
        selected={selected}
        handleClick={(e) => {
          if (e.target.className === 'close') {
            return setSelected('');
          }
          setSelected(e.target.previousSibling);
        }}
      />
    ));
  useEffect(() => {
    setDisplay(mapDrafts());
  }, [drafts]);

  return <div className='drafts'>{drafts && [...display]}</div>;
}
