export default class Model {
    url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTchd1HvAdoZ-t3i7TUvQKOP5q_TFwglmLeg3tb6zca4J_4AWAFHY9M35TMIggk0way9aVA3uTxURJT/pub?gid=0&single=true&output=tsv';

    load(){
        return fetch(this.url).then(r => r.text()).then(this.#parser);
    }

    #parser = d => {
        const rows = d.split('\r\n').map(row => row.split('\t'));
        const names = rows.shift();
        this.data = rows.map(el => el.reduce((d, val, i) => {
            d[names[i]] = val;
            return d;
        }, {}));
        return this.data;
    }
}