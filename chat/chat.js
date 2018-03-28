
class Chat extends React.Component {

    render() {
        return React.createElement(
            "div",
            { id: "chatContent" },
            React.createElement("iframe", { id: "chat-iframe", src: "https://webchat.botframework.com/embed/d2cfab16?s=JzXx7BDwpbU.cwA.vho.ZssTGSuetrvi70O4HR7pHt3SYz2Avo1pXjgCNTjywts" })
        );
    }
}

window.onload = function () {

    ReactDOM.render(React.createElement(
        Page,
        { title: "Chat" },
        React.createElement(Chat, null)
    ), document.getElementById("page"));
};