var text = function () {
    return PrivacyData[Locale];
};

function Section(props) {
    var data = props.data;
    var content = data.content.map(paragraph => React.createElement(
        Typography,
        { component: "p" },
        paragraph
    ));
    return React.createElement(
        Paper,
        { className: "section" },
        React.createElement(
            Typography,
            { variant: "headline", component: "h2" },
            data.title
        ),
        content
    );
}

function Policy() {
    var sections = text().policy.sections.map((data, index) => React.createElement(Section, { key: index, data: data }));

    return React.createElement(
        "section",
        { id: "policy" },
        React.createElement(
            Typography,
            { variant: "headline", component: "h1" },
            text().policy.title
        ),
        React.createElement(
            Paper,
            { className: "section" },
            React.createElement(
                Typography,
                { component: "p" },
                text().policy.introduction
            )
        ),
        sections
    );
}

class PrivacyPolicy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: Locale
        };
        this.title = props.title;
    }

    render() {
        this.title(text().title);
        return React.createElement(
            "div",
            null,
            React.createElement(Policy, null)
        );
    }
}

window.onload = function () {
    ReactDOM.render(React.createElement(
        Page,
        { title: text().title },
        React.createElement(PrivacyPolicy, null)
    ), document.getElementById("page"));
};