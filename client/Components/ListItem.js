import React, { PropTypes } from 'react';

export default class ListItem extends React.Component {
    static propTypes = {
        categories: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
            }),
        ),
    }

    static defaultProps = {
        categories: [
            {
                id: 1,
                title: 'Grocery',
            },
            {
                id: 2,
                title: 'Coffee',
            },
            {
                id: 3,
                title: 'Restorans',
            },
            {
                id: 4,
                title: 'Travel',
            },

            {
                id: 5,
                title: 'Appartmnt rent',
            },
        ],
    }

    render() {
        const categoryOptions = this.props.categories.map(category =>
            <option key={category.id} value={category.title}>{category.title}</option>);

        return (
            <li className="list-item">
                <span>List item text</span>
                <select name="category" className="dropdown">
                    {categoryOptions}
                </select>
            </li>
        );
    }
}
