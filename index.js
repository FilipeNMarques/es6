class Message {
    constructor(text = 'User Default', created = Date.now()) {
        this.text = text;
        this._created = created;
    }
    get created() {
        return this._created;
    }
    set created(created) {
        this._created = created;
    }

    toStrig() {
        return `Messagem criada em: ${this._created} - Text: ${this.text}`;

    }
}
var emptyMessage = new Message();
var textMessage = new Message('Mensagem de ontem', Date.now() - 86400);


console.log(emptyMessage);
console.log(textMessage);