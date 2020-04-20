import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InfiniteScroll from "react-infinite-scroll-component";
import { CSSTransition } from 'react-transition-group';
class ContentIMG extends Component {
      constructor(props, context) {
            super(props, context);
            this.state = {
                  listRender: []
            }
      }

      fetchMoreData = (page) => {
            let itemsLocal = JSON.parse(localStorage.imagesCloudiary);
            console.log(itemsLocal);

            if (itemsLocal.length !== 0) {
                  this.setState({ listRender: [...this.state.listRender, ...itemsLocal[0]] });
                  itemsLocal.shift();
                  localStorage.setItem("imagesCloudiary", JSON.stringify(itemsLocal));

            }

      }
      componentDidUpdate(prevProps, prevState) {
            if (this.props.items.type === "CLICK_NEW_TAG_SUCSESS") {
                  this.setState({ listRender: [] })
            }
      }
      render() {
            console.log(this.state.listRender);
            console.log(JSON.parse(localStorage.imagesCloudiary));

            let itemsLocal = JSON.parse(localStorage.imagesCloudiary);
            if (itemsLocal.length !== 0 && this.state.listRender.length === 0) {
                  this.setState({ listRender: [...this.state.listRender, ...itemsLocal[0]] });
                  itemsLocal.shift();
                  localStorage.setItem("imagesCloudiary", JSON.stringify(itemsLocal));

            }

            let images = null;
            if (this.state.listRender.length !== 0)
                  images = this.state.listRender.map((param, key) => <div key={key} className="img-con "   >
                        <img src={"https://res.cloudinary.com/hieudz/image/upload/" + param + ".jpg"} alt="" className="img-cloudinary wow fadeInUp" data-wow-duration={0.5 + "s"} data-wow-delay={(key <= 8) ? (key % 8) * 0.2 + "s" : (key % 4) * 0.2 + "s"} />
                  </div>)

            return (
                  < React.Fragment >
                        <InfiniteScroll
                              style={{ overflow: "visible" }}
                              dataLength={this.state.listRender.length}
                              next={this.fetchMoreData}
                              hasMore={(itemsLocal.length === 1) ? false : true}
                              loader={<h4>Loading...</h4>}
                        >
                              <div className="row justify-content-between m-0 scroll-img">
                                    {images}
                              </div>

                        </InfiniteScroll>


                  </React.Fragment>
            );
      }
}

export default ContentIMG;