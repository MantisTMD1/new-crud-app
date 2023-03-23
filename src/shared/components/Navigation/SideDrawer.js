import React from 'react';
import '../Navigation/SideDrawer.css';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

; const SideDrawer = props => {

      const Content = <CSSTransition in={props.show} 
            timeout={200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit>
            <aside className="side-drawer" onClick ={props.onClick}>{props.children}
            </aside>

      </CSSTransition>;
      return ReactDOM.createPortal(Content, document.getElementById('drawer-hook'))
};

export default SideDrawer;
