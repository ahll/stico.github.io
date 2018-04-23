
class ChatContent extends React.Component {

    render() {
        return React.createElement(
            "div",
            { id: "chatContent" },
            React.createElement("iframe", { id: "chat-iframe", src: "https://webchat.botframework.com/embed/6c3d98ee?s=AeshkHjdjEc.cwA.-C4.GGTGur1yzExUi0bmVAPI555rcw6Ggt0KEvQsoSLmCxs" })
        );
    }
}

window.onload = function () {

    ReactDOM.render(React.createElement(
        Page,
        { title: "Chat" },
        React.createElement(ChatContent, null)
    ), document.getElementById("page"));
};