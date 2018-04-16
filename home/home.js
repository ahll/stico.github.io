var text = function () {
    return HomeData[Locale];
};

var imageUrl = ImageSource + "/home/image/";

function ShowCase(props) {
    return React.createElement(
        "section",
        { id: "showcase", className: "showcase background-blue text-white" },
        React.createElement(
            "div",
            { className: "video" },
            React.createElement("iframe", { src: "https://www.youtube.com/embed/V0FtjeFV1tg", frameBorder: "0" })
        ),
        React.createElement(
            "div",
            { className: "text" },
            React.createElement(
                "h1",
                null,
                text().showcase.title
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    { className: "animateOne animated zoomIn" },
                    text().showcase.content
                ),
                React.createElement(
                    Button,
                    { size: "small", href: "#chat", className: "text-white" },
                    text().showcase.button
                )
            )
        )
    );
}

function AboutCard(props) {
    var data = props.data;
    return React.createElement(
        "div",
        { className: "item background-green about-card" },
        React.createElement(
            Card,
            null,
            React.createElement(CardMedia, {
                className: "itemMedia",
                image: imageUrl + data.image,
                title: data.title
            }),
            React.createElement(
                CardContent,
                null,
                React.createElement(
                    Typography,
                    { gutterBottom: true, variant: "headline", component: "h2" },
                    data.title
                ),
                React.createElement(
                    Typography,
                    { component: "p" },
                    data.content
                )
            ),
            React.createElement(CardActions, null)
        )
    );
}

function About(props) {

    var cards = text().about.data.map((data, index) => React.createElement(AboutCard, { key: index,
        data: data
    }));

    return React.createElement(
        "section",
        { id: "about", className: "" },
        React.createElement(
            "h1",
            null,
            text().about.title
        ),
        React.createElement(
            "div",
            { className: "itemList" },
            cards
        )
    );
}

function CreatorCard(props) {

    var data = props.data;
    return React.createElement(
        "div",
        { className: "smallItem creator-card" },
        React.createElement(
            Card,
            null,
            React.createElement(CardHeader, {
                avatar: React.createElement(
                    Avatar,
                    { "aria-label": "Recipe" },
                    data.avatar
                ),
                title: data.title,
                subheader: data.profession
            }),
            React.createElement(
                CardContent,
                null,
                React.createElement(
                    Typography,
                    { gutterBottom: true, variant: "headline", component: "h2" },
                    data.name
                ),
                React.createElement(
                    Typography,
                    { component: "p" },
                    data.content
                )
            ),
            React.createElement(
                CardActions,
                null,
                React.createElement(
                    IconButton,
                    { href: data.linkedin },
                    React.createElement(LinkedinIcon, null)
                ),
                React.createElement(
                    IconButton,
                    { href: data.email },
                    React.createElement(ContactMailIcon, null)
                )
            )
        )
    );
}

function Creator(props) {
    var cards = text().creator.data.map((data, index) => React.createElement(CreatorCard, { key: index,
        data: data
    }));

    return React.createElement(
        "section",
        { id: "creator", className: "background-green text-white" },
        React.createElement(
            "h1",
            null,
            text().creator.title
        ),
        React.createElement(
            "div",
            { className: "itemList" },
            cards
        )
    );
}

function FunctionCard(props) {
    var data = props.data;
    return React.createElement(
        "div",
        { className: "item background-blue function-card" },
        React.createElement(
            Card,
            null,
            React.createElement(
                CardMedia,
                { src: "" },
                React.createElement(
                    "div",
                    { className: "card-video" },
                    React.createElement("iframe", { src: data.video, frameBorder: "0" })
                )
            ),
            React.createElement(
                CardContent,
                null,
                React.createElement(
                    Typography,
                    { gutterBottom: true, variant: "headline", component: "h2" },
                    data.title
                ),
                React.createElement(
                    Typography,
                    { component: "p" },
                    data.content
                )
            ),
            React.createElement(CardActions, null)
        )
    );
}

function Function(props) {

    var cards = text().function.data.map((data, index) => React.createElement(FunctionCard, { key: index,
        data: data
    }));

    return React.createElement(
        "section",
        { id: "function", className: "" },
        React.createElement(
            "h1",
            null,
            text().function.title
        ),
        React.createElement(
            "div",
            { className: "itemList" },
            cards
        )
    );
}

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.iframeUrl = "https://webchat.botframework.com/embed/d2cfab16?s=AeshkHjdjEc.cwA.-C4.GGTGur1yzExUi0bmVAPI555rcw6Ggt0KEvQsoSLmCxsJzXx7BDwpbU.cwA.vho.ZssTGSuetrvi70O4HR7pHt3SYz2Avo1pXjgCNTjywts";
        this.state = Channels[0];
    }

    changeIframe(index) {

        this.setState(Channels[index]);
    }


    render() {

        const ChannelList = Channels.map((channel, index) => React.createElement(
            Button,
            { key: index, onClick: () => this.changeIframe(index), label: channel.name },
            channel.icon
        ));

        return React.createElement(
            "section",
            { id: "chat", className: "background-blue text-white" },
            React.createElement("h1", null),
            React.createElement(
                "div",
                { className: "chat-channels" },
                ChannelList
            ),
            React.createElement("h1", null),
            React.createElement(
                "div",
                { className: "chat" },
                React.createElement(
                    "h2",
                    { id: "chatTitle", className: "chat-title background-blue" },
                    this.state.name
                ),
                React.createElement(
                    "div",
                    { id: "chatContent" },
                    React.createElement(
                        Button,
                        { target: "_blank", href: this.state.url, className: "chat-connect-button", size: "large", color: "primary" },
                        React.createElement(SendIcon, null)
                    )
                )
            )
        );
    }
}

function Footer(props) {
    var data = text().footer;
    return React.createElement(
        "section",
        { id: "footer", className: "footer background-green text-white" },
        React.createElement(
            "p",
            null,
            data.content
        ),
        React.createElement(
            "p",
            null,
            data.company
        )
    );
}

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            locale: Locale
        };
        this.rightTitle = props.rightTitle;
    }

    render() {

        this.rightTitle(text().rightTitle);
        return React.createElement(
            "div",
            null,
            React.createElement(ShowCase, null),
            React.createElement(About, null),
            React.createElement(Creator, null),
            React.createElement(Function, null),
            React.createElement(Chat, null),
            React.createElement(Footer, null)
        );
    }
}

window.onload = function () {

    ReactDOM.render(React.createElement(
        Page,
        { title: text().title, rightTitle: text().rightTitle },
        React.createElement(Home, null)
    ), document.getElementById("page"));
};