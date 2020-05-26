import React, {Component} from "react";

import BootstrapTable from 'react-bootstrap-table-next';


class Home extends Component {

    render() {
        const products = [
            {
                'user': 'A',
                'title': 'I am hungry',
                'cat': 'Technology',
                'reply': '2',
                'date': '22/12/2019'
            },
        ];
        const columns = [{
            dataField: 'user',
            text: 'User',
            sort: true
        }, {
            dataField: 'title',
            text: 'title',
            sort: true
        }, {
            dataField: 'cat',
            text: 'Category',
            sort: true
        }, {
            dataField: 'reply',
            text: 'Replies',
            sort: true
        }, {
            dataField: 'date',
            text: 'Date Posted',
            sort: true
        }



        ];
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-16">
                        <h2>Message Board</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <button
                                    type="button"
                                    name="singlebutton"
                                    className="btn btn-default btn-lg  btn-block mb10"
                                > Add New Post</button>
                        </div>
                        </div>
                        <BootstrapTable bootstrap4='true' keyField='id' data={ products } columns={ columns } />


                      
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;