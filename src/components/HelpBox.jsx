import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

//test comment 1
//test comment 2
HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
