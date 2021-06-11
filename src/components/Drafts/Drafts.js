import React, { useState, useEffect, useRef } from 'react';
import './Drafts.css';
import DraftButton from './DraftButton';
import DraftContainer from './DraftContainer';
import 'animate.css';

export default function Drafts({ drafts }) {
  const [buttons, setButtons] = useState([]);
  const [selected, setSelected] = useState('');
  const prevSelected = useRef('');

  useEffect(() => {
    prevSelected.current = selected;
  }, [selected]);

  useEffect(() => {
    const createDraftButtons = () => {
      const buttons = [];
      for (let i = 0; i < drafts.length; i++) {
        buttons.push(
          <DraftButton
            key={i}
            index={i}
            handleClick={(e) => {
              setSelected(e.target.name);
            }}
          />
        );
      }
      return buttons;
    };
    setButtons(createDraftButtons());
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
              card.classList.remove('animate__fadeInDown');
              card.classList.add('animate__animated', 'animate__backOutUp');
              setTimeout(() => setSelected(''), 500);
            }
          }}
        />
      )}
      {drafts && [...buttons]}
    </div>
  );
}
