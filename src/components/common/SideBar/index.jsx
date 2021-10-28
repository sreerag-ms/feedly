/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Pane, Button } from '@bigbinary/neetoui/v2';

function SideBar({ children, showSideBar, setshowSideBar }) {
  return (
    <Pane isOpen={showSideBar} onClose={() => setshowSideBar(false)}>
      <Pane.Header>Typography</Pane.Header>
      <Pane.Body>
        Somewhere out in space live The Herculoids! Zok, the laser-ray dragon! Igoo, the giant rock
        ape! Tundro, the tremendous! Gloop and Gleep, the formless, fearless wonders! With Zandor,
        their leader, and his wife, Tara, and son, Dorno, they team up to protect their planet from
        sinister invaders! All-strong! All-brave! All-heroes! re The Herculoids!
      </Pane.Body>
      <Pane.Footer className="flex items-center space-x-2">
        <Button size="large" label="Continue" onClick={() => setshowSideBar(false)} />
        <Button size="large" label="Cancel" onClick={() => setshowSideBar(false)} />
      </Pane.Footer>
    </Pane>
  );
}
SideBar.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  showSideBar: PropTypes.bool.isRequired,
  setshowSideBar: PropTypes.func.isRequired,
};
export default SideBar;
