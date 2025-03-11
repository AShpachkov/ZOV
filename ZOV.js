const RRchat = {
    colors: ["ffffff", "0000ff", "ffff0000"],
    colorIndex: 0,

    init() {
        let _onChatMessage = window.onChatMessage;

        window.onChatMessage = (text, color) => {
            let chat = window.interface("Hud")?.$refs.chat;
            if (!chat) return _onChatMessage.call(this, text, color);

            if (text.includes("[Компания]")) {
                color = this.colors[this.colorIndex];
                this.colorIndex = (this.colorIndex + 1) % this.colors.length;
            }

            _onChatMessage.call(this, text, color);
        };

        interface("Hud")?.$refs?.chat?.add("Кичиро даун", "65c466");
    }
};
