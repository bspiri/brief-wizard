import React from "react";

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    arr = [{ name: "Name", slug: "Slug", template: "Template", link: "link", lastUpdated: "Last Updated" }, { name: "Name", slug: "Slug", template: "Template", link: "link", lastUpdated: "Last Updated" }, { name: "Name", slug: "Slug", template: "Template", link: "link", lastUpdated: "Last Updated" }, { name: "Name", slug: "Slug", template: "Template", link: "link", lastUpdated: "Last Updated" }, { name: "Name", slug: "Slug", template: "Template", link: "link", lastUpdated: "Last Updated" }, { name: "Name", slug: "Slug", template: "Template", link: "link", lastUpdated: "Last Updated" }];

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Templates</th>
                        <th>Link</th>
                        <th>Last Updated</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>2
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    {this.arr.map(obj => {
                        return <tr>
                            <td>{obj.name}</td>
                            <td>{obj.slug}</td>
                            <td>{obj.template}</td>
                            <td>{obj.link}</td>
                            <td>{obj.lastUpdated}</td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

export default Categories;