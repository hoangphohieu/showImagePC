
import React, { Component } from 'react';
import _ from 'lodash';
import * as type from "../constants";

import ContentIMG from "./contentIMG";
import Demo from "./demo";
class InputExcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickNav: false
    }
  }


  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.props.getListFolder(type.URL_LIST_FOLDER);
    // this.props.getPCProperties(type.URL_PC_PROPERTIES);
  }
  componentDidUpdate() {
    if (this.props.items.type === "GET_LIST_FOLDER_SUCSESS") { this.getListFolderSucsess() }
    if (this.props.items.type === "CLICK_NEW_TAG_SUCSESS") { this.clickNewTagSucess() }

    // console.log(this.props.items);

  }
  getListFolderSucsess = () => {
    localStorage.setItem("listFolder", JSON.stringify(this.props.items.listItem));
    let random = _.random(1, this.props.items.listItem.length);
    this.props.clickNewTag(this.props.items.listItem[random-1].tag);

    this.props.propToDefault();
  }
  clickNewTagSucess = () => {
    let image = this.props.items.listItem.resources.map(param => param.public_id);
    // image = _.chunk(image, 8);
    localStorage.setItem("imagesCloudiary", JSON.stringify(_.chunk(image, 8)));
    this.props.propToDefault();

    // console.log(JSON.parse(localStorage.imagesCloudiary));


  }

  // propToDefault = () => {  }
  checkTag = (param) => {
    this.props.clickNewTag(param);
    localStorage.setItem("imagesCloudiary", JSON.stringify([]));
    this.setState({clickNav:!this.state.clickNav})

  }
  render() {
    // console.log(localStorage.imagesCloudiary);

    let listFolderRender = null;
    if (JSON.parse(localStorage.listFolder).length !== 0)
      listFolderRender = JSON.parse(localStorage.listFolder).map((param, key) => <li><a onClick={() => this.checkTag(param.tag)} className="gn-icon gn-icon-cog" key={key}>{param.tag}</a></li>)

    return (
      <div className="App ">
        <ul id="gn-menu" className="gn-menu-main">
          <li className="gn-trigger">
            {(window.innerWidth >= 800) ?
              ""
              :
              <a href="# " className={(this.state.clickNav === true) ? "gn-icon gn-icon-menu gn-selected" : "gn-icon gn-icon-menu"} onClick={() => this.setState({ clickNav: !this.state.clickNav })}><span>Menu</span></a>
            }

            <nav className={((this.state.clickNav === true || window.innerWidth >= 800) ? "gn-menu-wrapper gn-open-all nav-chia" : "gn-menu-wrapper ")} >
              <div className="gn-scroller">
                <ul className="gn-menu">
                  {listFolderRender}
                </ul>
              </div>{/* /gn-scroller */}
            </nav>
          </li>
        </ul>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">

            </div>
            {/* <div className="col-12 mt-60 "> */}
            <div className="wrapper p-0 mt-60">
              <div></div> {/* ko duoc xoa*/}
              <div>
                <div className="container  ">


                  <Demo {...this.props} />
                  {/* <ContentIMG {...this.props} /> */}
                </div>
              </div>

            </div>

            {/* </div> */}
          </div>




        </div>
      </div >
    );
  }
}

export default InputExcel;
