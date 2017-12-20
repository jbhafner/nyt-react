var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container">
                    <h5>
                        React! -- Search the archives of <a href="https://nytimes.com/">The New York Times</a>!
                    </h5>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;