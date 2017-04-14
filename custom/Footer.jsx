/* global window */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pageInfo from 'utils/pageInfo'

import styles from 'css/footer.module.sass'


export default class Footer extends Component {
  openEditWindow (evt) {
    evt.preventDefault()
    window.open('/edit/', '_blank', 'toolbar=no,menubar=no,titlebar=no,height=600,width=800')
  }
  render () {
    const { page } =pageInfo(this.props.location.pathname)
    return (
      <div className={styles.footer}>
        fluxbox-wiki.org
        <a style={{ float: 'right' }} href={`https://github.com/sillyslux/fluxbox-wiki/blob/master/pages/${page.requirePath}`}>edit at github</a>
        <a style={{ float: 'left' }} href="/live-editor" onClick={this.openEditWindow}>eddy</a>
      </div>
    )
  }
}

Footer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}