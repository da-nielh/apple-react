import React, { Component } from 'react';
import '../common/css/styles.css'

class HeaderLink extends Component {
  render() {
    let {link, name} = this.props
    return (
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href={link}>
            {name}
          </a>
        </li>
    );
  }
}

export default HeaderLink;