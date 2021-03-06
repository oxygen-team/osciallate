var app = new Vue({
    el: '#app',
    data: {
        width: 800,
        height: 200,
        track: 542791275,
        color: "-",
        autoplay: false,
        related: false,
        comments: false,
        user: false,
        reposts: false,
        teaser: false,
        visual: false,
        title: "Osciallate - SoundCloud Embeds",
        sharing: false,
        download: false,
        buying: false,
        show_artwork: false,
        show_playcount: false,
        single_active: false,

    },
    methods: {
        change: function () {
            this.title = "Hello";
        }
    },
    computed: {
        apistring: function () {
            return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.track}&color=%23${this.color.substring(1)}&buying=${this.buying}&sharing=${this.sharing}&download=${this.download}&show_artwork=${this.show_artwork}&show_playcount=${this.show_playcount}&single_active=${this.single_active}&auto_play=${this.autoplay}&hide_related=${this.related}&show_comments=${this.comments}&show_user=${this.user}&show_reposts=${this.reposts}&show_teaser=${this.teaser}&visual=${this.visual}`
        },
        embedshowcase: function () {
            return `<iframe width="${this.width}" height="${this.height}" scrolling="on" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.track}&color=%23${this.color.substring(1)}&auto_play=${this.autoplay}&hide_related=${this.related}&show_comments=${this.comments}&show_user=${this.user}&show_reposts=${this.reposts}&show_teaser=${this.teaser}&visual=${this.visual}"></iframe>`
        },
        iframestyle: function () {
            return `width: ${this.width}px; margin: auto; padding: 50px;`
        }

    }

})