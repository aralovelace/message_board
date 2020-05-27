import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-md-center py-5">>
                <div className="container">
                    <div className="row">
                        <div className="section-about col-lg-6 mb-4 mb-lg-0">
                          <div>
                                <h2>Welcome to the Message Board</h2>
                                <p>You can only view the message board once you login. Please login to the login page</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;