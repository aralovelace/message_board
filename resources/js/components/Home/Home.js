import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <main className="py-4">
                            <h2>Welcome to the Message Board</h2>
                            <p>You can only view the message board once you login. Please login to the login page</p>
                        </main>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;