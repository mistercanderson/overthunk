import React, { useState, useEffect, useRef } from 'react';
import './Drafts.css';
import DraftButton from './DraftButton';
import DraftContainer from './DraftContainer';
import 'animate.css';

export default function Drafts({ drafts }) {
  const [displayButtons, setDisplayButtons] = useState([]);
  const [selected, setSelected] = useState('');
  const prevSelected = useRef(false);

  useEffect(() => {
    prevSelected.current = selected;
  }, [selected]);

  useEffect(() => {
    const mapDraftButtons = () =>
      drafts.map((d, i) => (
        <DraftButton
          key={d.message + i}
          draft={d}
          index={i}
          handleClick={(e) => {
            setSelected(e.target.name);
          }}
        />
      ));
    setDisplayButtons(mapDraftButtons());
  }, [drafts]);

  return (
    <div className='drafts'>
      {selected && (
        <DraftContainer
          animate={!prevSelected.current && true}
          draft={drafts[selected]}
          index={parseInt(selected)}
          handleClick={(e) => {
            if (e.target.className === 'close') {
              const card = e.target.closest('.draft-container');
              card.classList.remove('animate__animated', 'animate__fadeInDown');
              card.classList.add('animate__animated', 'animate__backOutUp');
              setTimeout(() => setSelected(''), 500);
            }
          }}
        />
      )}
      {drafts && [...displayButtons]}
    </div>
  );
}
